import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Manufacturer, ManufacturerData } from '../models/personalities/Manufacturer.model';
import { HttpClient } from '@angular/common/http';
import { DataVehicleType, VehicleType } from '../models/personalities/VehicleType.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleTypeService {
  private URL_PATH = environment.baseURL + '/product-dep/vehicleType';
  private vehicleTypes: any;

  constructor(private _http: HttpClient) {
  }

  public get( id: string[] ) {
    return this._http.get(this.URL_PATH)
      .pipe(
        map( (res: VehicleType ) => {
          let vehicles: DataVehicleType[] = [];
          res.data.forEach( (vehicle: DataVehicleType ) => {
            id.forEach( (_id:string) => {
              if ( _id === vehicle.id ) {
                vehicles.push(vehicle);
              }
            } );
          } );
          return vehicles;
        })
      );
  }
/*
  public getVehicleType() {
    this._http.get(this.URL_PATH).subscribe( (res: VehicleType) => {
      this.vehicleTypes = res;
      //console.log(this.vehicleTypes);
    });
  }

  public getVehicleTypeId( ids: string[] ) {
    let res: any[] = [];
    this.vehicleTypes.data.forEach( (vehicle) => {
      console.log(vehicle);
      ids.forEach( (id => {
        if ( id === vehicle.id ) {
          res.push(vehicle);
        }
      }) );
    } );
    return res;
  }
*/
}
