import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Inject,
  PLATFORM_ID
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from "@angular/forms";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { MeasureService } from "src/app/core/services/measure.service";
// import {
//   Measure,
//   MeasureSearchParams
// } from "src/app/core/models/Measure.model";
import { config } from "rxjs";
import { isPlatformServer } from "@angular/common";

const WIDTH_MEASURE_KEY = makeStateKey("width_measure");
const CONFIG_SEARCH_BAR = makeStateKey("config_search");

// export interface ConfigObjectState {
//   measurementsDefault: MeasureSearchParams;
//   isSmart: boolean;
//   isReadonly: boolean;
// }

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  // public formSearchTire: FormGroup;
  @Output("onSearch") private onSearch: EventEmitter<
    any
  > = new EventEmitter<any>();

  @Input("readonly") public isReadonly: boolean = false;
  @Input("smart") public isSmart: boolean = false;
  @Input("measurementsDefault") public measurementsDefault: any;

  public widthMeasure: string[] = [];
  public aspectRatioMeasure: string[] = [];
  public diameterMeasure: string[] = [];

  public widthFormControl: FormControl;
  public apsectRatioFormControl: FormControl;
  public diameterFormControl: FormControl;

  public isLoadingWidthMeasure: boolean = false;
  public isLoadingAspectRatioMeasure: boolean = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _transferState: TransferState,
    private readonly _measure: MeasureService,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private readonly _platform: Object
  ) {}

  ngOnInit(): void {
  //   // this.saveStateServer();
  //   this.initialValueFormControls();

  //   this.widthMeasure = this._transferState.get<string[]>(
  //     WIDTH_MEASURE_KEY,
  //     []
  //   );

  //   if (this.widthMeasure.length == 0) {
  //     this._measure
  //       .getBySearchParams({ width: "all" })
  //       .subscribe((data: string[]) => {
  //         // console.log("data retrieved from API");
  //         // console.log(data)
  //         // this.widthMeasure = data;
  //         this.widthFormControl.setValue("");
  //         this._transferState.set<string[]>(WIDTH_MEASURE_KEY, data);
  //       });
  //   }

  //   // console.log(this.widthMeasure);
  }

  // public onSubmit(evt): void {
  //   this.onSearch.next({
  //     width: this.widthFormControl.value,
  //     ratio: this.apsectRatioFormControl.value,
  //     diameter: this.diameterFormControl.value
  //   });
  // }

  // async onChangesWidthHandle(): Promise<void> {
  //   const width = this.widthFormControl.value;

  //   if (!width) {
  //     this.apsectRatioFormControl.reset("");
  //     this.apsectRatioFormControl.disable();

  //     this.diameterFormControl.reset("");
  //     this.diameterFormControl.disable();

  //     this.diameterMeasure = [];
  //     this.aspectRatioMeasure = [];

  //     this._changeDetectorRef.markForCheck();
  //   } else {
  //     this.isLoadingWidthMeasure = true;

  //     const aspectRatioRes = await this._measure
  //       .getBySearchParams({ width, ratio: "all" })
  //       .toPromise();

  //     if (aspectRatioRes.length > 0) {
  //       this.aspectRatioMeasure = aspectRatioRes;
  //     } else {
  //       this.aspectRatioMeasure = [];
  //     }

  //     this.isLoadingWidthMeasure = false;
  //     // console.log(aspectRatioRes)

  //     this.apsectRatioFormControl.reset("");
  //     this.apsectRatioFormControl.enable();

  //     this.diameterFormControl.reset("");
  //     this.diameterFormControl.disable();
  //     this.diameterMeasure = [];

  //     this._changeDetectorRef.markForCheck();
  //   }
  // }

  // async onChangeAspectRatioHandle(): Promise<void> {
  //   const ratio = this.apsectRatioFormControl.value;
  //   if (!ratio) {
  //     this.diameterFormControl.reset("");
  //     this.diameterFormControl.disable();

  //     this.diameterMeasure = [];

  //     this._changeDetectorRef.markForCheck();
  //   } else {
  //     this.isLoadingAspectRatioMeasure = true;
  //     const diameterRes = await this._measure
  //       .getBySearchParams({ width: this.widthFormControl.value, ratio })
  //       .toPromise();

  //     if (diameterRes.length > 0) {
  //       this.diameterMeasure = diameterRes;
  //     } else {
  //       this.diameterMeasure = [];
  //     }

  //     this.diameterFormControl.reset("");
  //     this.diameterFormControl.enable();

  //     this.isLoadingAspectRatioMeasure = false;

  //     this._changeDetectorRef.markForCheck();
  //   }
  // }

  // private initialValueFormControls(): void {
  //   this.widthFormControl = new FormControl(
  //     {
  //       value:
  //         this.isReadonly && this.measurementsDefault.width
  //           ? this.measurementsDefault.width
  //           : "",
  //       disabled: this.isReadonly
  //     },
  //     [Validators.required]
  //   );
  //   this.apsectRatioFormControl = new FormControl(
  //     {
  //       value:
  //         this.isReadonly && this.measurementsDefault.ratio
  //           ? this.measurementsDefault.ratio
  //           : "",
  //       disabled: this.isReadonly || true
  //     },
  //     [Validators.required]
  //   );
  //   this.diameterFormControl = new FormControl(
  //     {
  //       value:
  //         this.isReadonly && this.measurementsDefault.diameter
  //           ? this.measurementsDefault.diameter
  //           : "",
  //       disabled: this.isReadonly || true
  //     },
  //     [Validators.required]
  //   );
  // }

  // private saveStateServer(): void {
  //   if (isPlatformServer(this._platform)) {
  //     this._transferState.set<ConfigObjectState>(CONFIG_SEARCH_BAR, {
  //       measurementsDefault: this.measurementsDefault,
  //       isSmart: this.isSmart,
  //       isReadonly: this.isReadonly
  //     });
  //   } else {
  //     if (this._transferState.hasKey(CONFIG_SEARCH_BAR)) {
  //       const {
  //         isReadonly,
  //         isSmart,
  //         measurementsDefault
  //       } = this._transferState.get<ConfigObjectState>(CONFIG_SEARCH_BAR, {
  //         isReadonly: false,
  //         isSmart: false,
  //         measurementsDefault: { diameter: "", ratio: "", width: "" }
  //       });
  //       this.isReadonly = isReadonly;
  //       this.isSmart = isSmart;
  //       this.measurementsDefault = measurementsDefault;
  //     }
  //   }
  // }
}
