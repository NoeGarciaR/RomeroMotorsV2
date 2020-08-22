import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Manufacturer, ManufacturerData } from '../models/personalities/Manufacturer.model';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private URL_PATH = environment.baseURL + '/product-dep/:manufacturer';
  private manufactures: ManufacturerData[];

  constructor(private _http: HttpClient) {
    /*this.getManufactures();*/
  }

  public getManufactures() {
    this._http.get(this.URL_PATH).subscribe( (res: Manufacturer) => {
      this.manufactures = res.data;
      //console.log(this.manufactures);
    });
  }

  public getManufacturerId( id: string ) {
    let res: ManufacturerData = null;
    this.manufactures.forEach( (manufacturer: ManufacturerData) => {
      if ( manufacturer.id === id ){
        res = manufacturer;
        return;
      }
    });
    return res;
  }

}
