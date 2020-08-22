import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { TireService } from "src/app/core/services/tire.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Tire } from "src/app/core/models/Tire.model";

@Component({
  selector: "app-update-tire",
  templateUrl: "./update-tire.component.html",
  styleUrls: ["./update-tire.component.scss"]
})
export class UpdateTireComponent implements OnInit {
  public formTire: FormGroup;
  public isLoadingUpdateTire: boolean = false;
  public ID: string;
  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _tireService: TireService,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.ID = this._activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.formTire = this._formBuilder.group({
      manufacturer: ["", [Validators.required]],
      description: ["", [Validators.required]],
      altText: [""],
      stock: ["", [Validators.required, Validators.min(0)]],
      vehicleType: ["", [Validators.required]],
      width: ["", [Validators.required]],
      ratio: ["", [Validators.required]],
      diameter: ["", [Validators.required]],
      regCost: ["", [Validators.required]],
      discount: ["", [Validators.required]],
      finalCost: ["", [Validators.required]]
    });

    // this._tireService.getByID(this.ID).subscribe((tire: Tire) => {
    //   this.formTire.patchValue(tire);
    // });
  }

  public onSubmit() {
    // console.log(this.formTire.value);
    this.isLoadingUpdateTire = true;
    // this._tireService.update(this.ID, this.formTire.value).subscribe(
    //   res => this._router.navigate(["/admin", "tire"]),
    //   err => {
    //     console.error(err);
    //     this.isLoadingUpdateTire = false;
    //   },
    //   () => (this.isLoadingUpdateTire = false)
    // );
  }
}
