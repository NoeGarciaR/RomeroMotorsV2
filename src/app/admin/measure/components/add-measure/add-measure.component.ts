import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { MeasureService } from "src/app/core/services/measure.service";

@Component({
  selector: "app-add-measure",
  templateUrl: "./add-measure.component.html",
  styleUrls: ["./add-measure.component.scss"]
})
export class AddMeasureComponent implements OnInit {
  public formMeasure: FormGroup;
  public isLoadingCreateMeasure: boolean = false;

  public typeCreateMeasure: {
    nameType: string;
    id: number;
    nameField: string;
  }[] = [
    {
      nameType: "Ancho",
      id: 1,
      nameField: "width"
    },
    {
      nameType: "Perfil",
      id: 2,
      nameField: "ratio"
    },
    {
      nameType: "Aro",
      id: 3,
      nameField: "diameter"
    }
  ];

  public controlTypeForm: FormControl;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _measureService: MeasureService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.formMeasure = this.formContrucFromWidth();
    this.controlTypeForm = new FormControl("width", [Validators.required]);
  }

  public onSubmit() {
    // console.log(this.formMeasure);
    this.isLoadingCreateMeasure = true;

    this._measureService
      .create(this.controlTypeForm.value, this.formMeasure.value)
      .subscribe(
        res => console.log(res),
        err => {
          console.error(err);
          this.isLoadingCreateMeasure = false;
        },
        () => (this.isLoadingCreateMeasure = false)
      );
  }

  public onChangeTypeForm(typeForm: string) {
    switch (typeForm) {
      case "width":
        this.formMeasure = this.formContrucFromWidth();
        break;

      case "ratio":
        this.formMeasure = this.formContrucFromRatio();

        break;
      case "diameter":
        this.formMeasure = this.formContrucFromDiameter();

        break;
    }
  }

  private formContrucFromWidth(): FormGroup {
    return this._formBuilder.group({
      width: ["", [Validators.required]]
    });
  }

  private formContrucFromRatio(): FormGroup {
    return this._formBuilder.group({
      width: ["", [Validators.required]],
      ratio: ["", [Validators.required]]
    });
  }

  private formContrucFromDiameter(): FormGroup {
    return this._formBuilder.group({
      width: ["", [Validators.required]],
      ratio: ["", [Validators.required]],
      diameter: ["", [Validators.required]]
    });
  }
}
