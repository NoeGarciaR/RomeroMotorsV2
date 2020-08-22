import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { StorageMap } from "@ngx-pwa/local-storage";
import { BehaviorSubject, Observable } from "rxjs";
import { EncryptService } from "./encrypt.service";
import { map } from "rxjs/operators";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  private _cartItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private STORAGE_SHOP: string = "shop_cart";
  constructor(
    private readonly _storage: StorageMap,
    private readonly _encryptService: EncryptService,
    @Inject(PLATFORM_ID) private readonly _platform: Object
  ) {
    if (isPlatformBrowser(_platform)) {
      this._storage
        .get<string>(this.STORAGE_SHOP)
        .subscribe((items: string) => {
          if (items) {
            this._cartItems.next(
              JSON.parse(this._encryptService.decrypt(items))
            );
          }
        });
    }
  }

  /**
   * add
   * @description Agrega un nuevo producto
   */
  public add(item: any): any[] {
    const items = this._cartItems.value;
    items.push(item);
    this._storage
      .set(
        this.STORAGE_SHOP,
        this._encryptService.encrypt(JSON.stringify(items))
      )
      .subscribe();
    this._cartItems.next(items);
    return items;
  }

  /**
   * geCountItems
   * @description Cantidad de Prodcutos en el carrito
   */
  public geCountItems(): Observable<number> {
    return this._cartItems.asObservable().pipe(map(items => items.length));
  }

  /**
   * delete
   * @description Eliminar un producto
   */
  public delete(itemID: string) {
    const items = this._cartItems.value;
    const itemDelete = items.find(item => item._id === itemID);

    const newItems = items.filter(item => item !== itemDelete);
    this._storage
      .set(
        this.STORAGE_SHOP,
        this._encryptService.encrypt(JSON.stringify(newItems))
      )
      .subscribe();
    this._cartItems.next(newItems);
    return itemDelete;
  }

  /**
   * update
   * @description Actualiza un producto
   */
  public update() {}

  /**
   * get
   */
  public get(): Observable<any> {
    return this._cartItems.asObservable();
  }

  /**
   * clean
   * @description Limpia el arreglo de Productos
   */
  public clean() {
    this._cartItems.next([]);
    this._storage.delete(this.STORAGE_SHOP).subscribe();
  }

  /**
   * set
   * @description Agregar un arreglo de productos
   */
  public set(items: any[]) {
    this._storage
      .set(
        this.STORAGE_SHOP,
        this._encryptService.encrypt(JSON.stringify(items))
      )
      .subscribe();
    this._cartItems.next(items);
  }
}
