import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { ShopService } from "src/app/core/services/shop.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "Header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input("admin")
  public isAdmin: boolean = false;
  @Input("isShowSlider")
  public isShowSlider: boolean = false;

  public isOpenMenuHamburguer: boolean = false;
  public countItemShoppingCart$: Observable<number>;
  public showMenuShoppingCart: boolean = false;

  constructor(
    private readonly _shopService: ShopService,
    private _router: Router
  ) {
    this.countItemShoppingCart$ = this._shopService.geCountItems();

    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(
        (event: NavigationEnd) =>
          (this.isShowSlider = event.url === "/" ? true : false)
      );
  }

  ngOnInit(): void {}

  /**
   * toggleMenu
   */
  public toggleMenu(): void {
    this.isOpenMenuHamburguer = !this.isOpenMenuHamburguer;
  }

  public toggleMenuShoppingCart() {
    this.showMenuShoppingCart = !this.showMenuShoppingCart;
  }
}
