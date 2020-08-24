import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manufacturer, ManufacturerData } from '../models/personalities/Manufacturer.model';
import { map } from 'rxjs/operators';
import { Tire } from '../models/personalities/Tire.model';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private URL_PATH = environment.baseURL + '/product-dep/manufacturer';

  constructor(private _http: HttpClient) {
    /*this.getManufactures();*/
  }

  public get( id: string ) {
    return this._http.get(this.URL_PATH)
      .pipe(
        map( (res: Manufacturer) => {
          let dat: ManufacturerData = null;
          res.data.forEach( data => {
            if ( data.id === id ) {
              dat = data;
            }
          } );
          //console.log(res.data);
          return dat;
      })
      );
  }
/*
  public getManufactures() {
    this._http.get(this.URL_PATH).subscribe( (res: Manufacturer) => {
      this.manufactures = res.data;
      //console.log(this.manufactures);
    });
  }
  */
/*
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
*/
}
