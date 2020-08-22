import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { differenceInMinutes } from "date-fns";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, tap, mergeAll, mergeMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Width } from "../models/personalities/Mensasure-2";
// import { Measure } from "../models/Measure.model";

@Injectable({
  providedIn: "root",
})
export class MeasureService {
  private URL_BASE: string = `${environment.baseURL}/product-dep`;
  // private WATERMARK_GET_API = null;

  private _measurements$: BehaviorSubject<Width[]> = new BehaviorSubject<any>(
    []
  );

  constructor(private readonly _http: HttpClient) {
    // this.getAPI().subscribe();
  }

  public getDataParamsForSearch(): Observable<Width[]> {
    return this._http
      .get(`${this.URL_BASE}/width`)
      .pipe(map((res: any) => {
        //console.log(res.data);
        return res.data;
      }));
  }
}
