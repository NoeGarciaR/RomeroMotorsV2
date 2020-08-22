import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TireService } from "src/app/core/services/tire.service";
import { Tire } from "../../../../core/models/personalities/Tire.model";
import { makeStateKey, TransferState } from "@angular/platform-browser";

const TIRES_SEARCH = makeStateKey("TIRES_SEARCH");

@Component({
  selector: "app-result-search-tire",
  templateUrl: "./result-search-tire.component.html",
  styleUrls: ["./result-search-tire.component.scss"],
})
export class ResultSearchTireComponent implements OnInit, OnDestroy {
  public tires: Tire;
  public queryParams: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _tireService: TireService,
    private _transferState: TransferState
  ) {
    //this.tires = this._transferState.get<Tire[]>(TIRES_SEARCH, []);
    this.queryParams = this._activatedRoute.snapshot.queryParams;

    if (this.tires === null) {
      this._tireService.getTireOption(this.queryParams).subscribe( (res) => {
        console.log(res);
      });
      /*this._tireService.get(this.queryParams).subscribe((res) => {
        //this.tires = res;
        this._transferState.set(TIRES_SEARCH, res);
        // console.log(res);
      });*/
    }
/*
    this.queryParams = this._activatedRoute.snapshot.queryParams;
    if (this.tires.length === 0) {
      this._tireService.get(this.queryParams).subscribe((res) => {
        this.tires = res;
        this._transferState.set(TIRES_SEARCH, res);
        // console.log(res);
      });*/
    }

  ngOnDestroy(): void {
    this._transferState.set(TIRES_SEARCH, []);
    this.tires = null;
  }

  ngOnInit(): void {}
  options = { };
  public onSubmit(evt) {
    this._tireService.get(evt).subscribe((res) => {
      //console.log('TIRE ', res);
      this.options = res;
      //this.tires = res;
      //this._transferState.set(TIRES_SEARCH, res);
    });
  }
}
