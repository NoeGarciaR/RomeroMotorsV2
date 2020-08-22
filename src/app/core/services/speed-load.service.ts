import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpeedLoad, Data } from '../models/personalities/SpeedLoad.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpeedLoadService {
  private URL_PATH = environment.baseURL + '/product-dep/:index';
  private load: Data[] = [];
  private speed: Data[] = [];


  constructor(private _http: HttpClient) {
    this.getSpeedLoad();
  }

  private getSpeedLoad() {
    this._http.get(this.URL_PATH).subscribe( (res: SpeedLoad) => {
      res.data.forEach( (data: Data) => {
        if ( data.indexKind === 'load' ) {
          this.speed.push(data);
        } else {
          if ( data.indexKind === 'speed' ) {
            this.load.push(data);
          }
        }
      });
    });
  }

  public searchSpeedId( id: string ): Data {
    this.speed.forEach( (data: Data) => {
      if ( data.id === id ) {
        return data;
      }
    } );
    return null;
  }

  public searchLoadId( id: string ): Data {
    this.load.forEach( (data: Data) => {
      if ( data.id === id ) {
        return data;
      }
    } );
    return null;
  }

}
