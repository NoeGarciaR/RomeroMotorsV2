import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpeedLoad, Data, SpeedLoadResult } from '../models/personalities/SpeedLoad.model';
import { environment } from '../../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { DataVehicleType, VehicleType } from '../models/personalities/VehicleType.model';

@Injectable({
  providedIn: 'root'
})
export class SpeedLoadService {
  private URL_PATH = environment.baseURL + '/product-dep/index';
  private load: Data[] = [];
  private speed: Data[] = [];

  constructor(private _http: HttpClient) {
  }

  public get( id_load: string[], id_spped: string ) {
    return this._http.get(this.URL_PATH)
      .pipe(
        map( (res: SpeedLoad ) => {
          let resultado: SpeedLoadResult = {
            load: [],
            spped: null
          };
          res.data.forEach( ( item: Data ) => {
            id_load.forEach( ( _id_load: string ) => {
              if ( item.id === _id_load ) {
                resultado.load.push(item);
              }
            });
            if ( item.id === id_spped ) {
              resultado.spped = item;
            }
          });
          return resultado;
        })
      );
  }
/*
  private getSpeedLoad() {
    this._http.get(this.URL_PATH).subscribe( (res: SpeedLoad) => {
      res.data.forEach( (data: Data) => {
        if ( data.indexKind === 'speed' ) {
          this.speed.push(data);
        } else {
          if ( data.indexKind === 'load' ) {
            this.load.push(data);
          }
        }
      });
    });
  }

  public searchSpeedId( id: string ): Data {
    let dato: Data = null;
    this.speed.forEach( (data: Data) => {
      if ( data.id === id ) {
        //console.log('Encontrado', data.value);
        dato = data;
      }
    } );
    return dato;
  }

  public searchLoadId( id: string ): Data {
    let dato: Data = null;
    this.load.forEach( (data: Data) => {
      if ( data.id === id ) {
        //console.log('Encontrado', data.value);
        dato = data;
      }
    } );
    return dato;
  }
  */
}
