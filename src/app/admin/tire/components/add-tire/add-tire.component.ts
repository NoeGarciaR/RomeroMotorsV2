import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TireService } from "src/app/core/services/tire.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-tire",
  templateUrl: "./add-tire.component.html",
  styleUrls: ["./add-tire.component.scss"]
})
export class AddTireComponent implements OnInit {
  public formTire: FormGroup;
  public isLoadingCreateTire: boolean = false;
  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _tireService: TireService,
    private readonly _router: Router
  ) {}

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
  }

  public onSubmit() {
    // console.log(this.formTire.value);
    this.isLoadingCreateTire = true;
    // this._tireService.create(this.formTire.value).subscribe(
    //   res => this._router.navigate(["/admin", "tire"]),
    //   err => {
    //     console.error(err);
    //     this.isLoadingCreateTire = false;
    //   },
    //   () => (this.isLoadingCreateTire = false)
    // );
  }
}
