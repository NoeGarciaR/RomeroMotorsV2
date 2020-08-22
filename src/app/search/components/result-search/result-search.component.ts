import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { makeStateKey, TransferState } from "@angular/platform-browser";
import { Tire } from "src/app/core/models/Tire.model";
import { TireService } from "src/app/core/services/tire.service";

const SEARCH_KEY = makeStateKey("searchTire");

@Component({
  selector: "app-result-search",
  templateUrl: "./result-search.component.html",
  styleUrls: ["./result-search.component.scss"]
})
export class ResultSearchComponent implements OnInit, OnDestroy {
  public paramsSearchTire: any;
  public tires: Tire[] 
  // = [123,123,123,123,123,123,123];

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _transferState: TransferState,
    private readonly _tireService: TireService
  ) {
    this.paramsSearchTire = this._activatedRoute.snapshot
      .queryParams as any;
  }

  ngOnInit(): void {

    // console.log('paramsSearchTire', this.paramsSearchTire)
    this.tires = this._transferState.get<Tire[]>(SEARCH_KEY, null);
    if (!this.tires) {
    //   // console.log(this.paramsSearchTire)
      // this._tireService
      //   .getBySearchParams({ ...this.paramsSearchTire, limit: "10", page: "1", })
      //   .subscribe((data: Tire[]) => {
      //     // console.log('data getBySearParams', data)
      //     // console.log("data retrieved from API");
      //     this.tires = data;
      //     this._transferState.set<Tire[]>(SEARCH_KEY, data);
      //   });
    }
    // console.log('tires',this.tires);
  }

  ngOnDestroy(){
    this._transferState.remove(SEARCH_KEY)
  }
}
