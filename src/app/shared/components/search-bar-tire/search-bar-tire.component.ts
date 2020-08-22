import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { MeasureService } from "src/app/core/services/measure.service";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { Width, Ratio } from "src/app/core/models/personalities/Mensasure-2";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

const WIDTH_MEASURE_KEY = makeStateKey("width_measure");

@Component({
  selector: "search-bar-tire",
  templateUrl: "./search-bar-tire.component.html",
  styleUrls: ["./search-bar-tire.component.scss"],
})
export class SearchBarTireComponent implements OnInit, OnChanges {
  @Input("onlySearchBar")
  public isOnlySearchBar: boolean = false;

  @Input("measurementInitial")
  public measurementIntial: any = {};
  @Input("disabledNavigate")
  public isDisabledNavigate: boolean = false;

  @Output("submit")
  private _onSubmit: EventEmitter<any> = new EventEmitter();

  public isShowHelpMeasurements: boolean = false;
  public measuresParamsSearch: Width[] = [];
  public formSearch: FormGroup;

  constructor(
    private _measureService: MeasureService,
    private _transferState: TransferState,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.formSearch = this._formBuilder.group({
      width: ["", [Validators.required]],
      ratio: [{ value: "", disabled: true }, [Validators.required]],
      diameter: [{ value: "", disabled: true }, [Validators.required]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.measurementIntial);
    this.formSearch.patchValue(this.measurementIntial);
  }

  ngOnInit(): void {
    this.measuresParamsSearch = this._transferState.get<Width[]>(
      WIDTH_MEASURE_KEY,
      []
    );

    if (this.measuresParamsSearch.length === 0) {
      this._measureService.getDataParamsForSearch().subscribe((res) => {
        this.measuresParamsSearch = res;
        //console.log(res);
        this._transferState.set<Width[]>(WIDTH_MEASURE_KEY, res);
        // console.log(this.measuresParamsSearch);
      });
    }

    // console.log(this.measuresParamsSearch);
  }

  public toggleShowHelpMeasurements() {
    this.isShowHelpMeasurements = !this.isShowHelpMeasurements;
  }

  public getRatioByWidth(): Ratio[] {
    const widthSelected: string = this._getControl("width").value;
    //console.log('Whith Selected', widthSelected);
    if (widthSelected !== null || widthSelected !== "") {
      for (const item of this.measuresParamsSearch) {
        //console.log(item.children);
        if (item._id === widthSelected) {
          this._getControl("ratio").enable({ onlySelf: true });
          return item.children;
        }
      }
    }

    return [];
  }

  public getDiameterByRatio() {
    const widthSelected: string = this._getControl("width").value;
    const ratioSelected: string = this._getControl("ratio").value;

    if (widthSelected !== null || widthSelected !== "") {
      for (const item of this.measuresParamsSearch) {
        if (item._id === widthSelected) {
          for (const ratio of item.children) {
            if (ratio._id === ratioSelected) {
              this._getControl("diameter").enable({ onlySelf: true });
              return ratio.children;
            }
          }
        }
      }
    }

    return [];
  }

  public onChangeInputWidth(): void {
    this._getControl("ratio").setValue("");
    this._getControl("diameter").setValue("");
    this._getControl("diameter").disable({ onlySelf: true });
  }

  public onChangeInputRatio(): void {
    this._getControl("diameter").setValue("");
    this._getControl("diameter").disable({ onlySelf: true });
  }

  public onSearchTire(): void {
    if (!this.isDisabledNavigate) {
      this._router.navigate(["/search"], {
        queryParams: this.formSearch.value,
      });
    }

    this._onSubmit.emit(this.formSearch.value);
  }

  public isValidForm() {
    return (
      this._getControl("width").value !== "" &&
      this._getControl("ratio").value !== "" &&
      this._getControl("diameter").value !== ""
    );
  }

  private _getControl(control: string) {
    return this.formSearch.get(control);
  }
}
