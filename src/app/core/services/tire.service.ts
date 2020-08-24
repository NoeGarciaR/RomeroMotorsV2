import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Tire } from "../models/personalities/Tire.model";


import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TireService {
  private URL_TIRE = `${environment.baseURL}/product/tire`;
  constructor(private readonly _http: HttpClient) {}

  public get(queryParams: Partial<Tire>): Observable<Tire> {
    return this._http
      .get(`${this.URL_TIRE}`, { params: queryParams as any })
      .pipe(map((res: any) => res.data));
  }

  public getTireOption( options: any ){
    const headers = new HttpHeaders({
      limit: '8',
      page: '1',
      widthId: options.width,
      ratioId: options.ratio,
      diameterId : options.diameter
    });
    return this._http.get(this.URL_TIRE, { headers } )
      .pipe(
        map( (res: Tire ) => {
          return res.data.docs;
        } )
      );
  }

  // public get(paramsSearchTire): Observable<Tire[]> {
  //   return this._httpClient
  //     .get(this.URL_TIRE, {
  //       params: new HttpParams({
  //         fromObject: paramsSearchTire
  //       })
  //     })
  //     .pipe(map((res: any) => res.data as Tire[]));
  // }

  // public getByID(tireID: string): Observable<any> {
  //   return this._httpClient
  //     .get(`${this.URL_TIRE}/${tireID}`)
  //     .pipe(map((res: any) => res.data as Tire));
  // }

  // public getBySearchParams(
  //   paramsSearchTire: Partial<any>
  // ): Observable<Tire[]> {
  //   return this._httpClient
  //     .get(this.URL_TIRE, {
  //       params: new HttpParams({
  //         fromObject: paramsSearchTire
  //       })
  //     })
  //     .pipe(map((res: any) => res.data as Tire[]));
  // }

  // public update(tireID: string, tireUpdate: Partial<Tire>): Observable<any> {
  //   return this._httpClient.put(`${this.URL_TIRE}/${tireID}`, tireUpdate);
  // }

  // public create(newTire: Partial<Tire>): Observable<any> {
  //   return this._httpClient.post(this.URL_TIRE, newTire);
  // }

  // public delete(tireID: string): Observable<any> {
  //   console.log(tireID);
  //   return this._httpClient.delete(`${this.URL_TIRE}/${tireID}`);
  // }
}
