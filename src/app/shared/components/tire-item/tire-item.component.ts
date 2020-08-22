import { Component, OnInit, Input, AfterContentChecked } from "@angular/core";
import { Tire } from "src/app/core/models/Tire.model";
import { FormControl, Validators } from "@angular/forms";
import { environment } from '../../../../environments/environment';
import { SpeedLoadService } from '../../../core/services/speed-load.service';

@Component({
  selector: "app-tire-item",
  templateUrl: "./tire-item.component.html",
  styleUrls: ["./tire-item.component.scss"]
})
export class TireItemComponent implements OnInit {
  url_path = environment.baseURL_UPL;
  @Input("tire") public tire: Tire = null;

  public quantityFormControl: FormControl;
  constructor( private _speedLoad: SpeedLoadService) {
  }

  ngOnInit(): void {
    //console.log('Estoy en Tire');
    //console.log(this.tire);
    if (this.tire) {
      this.quantityFormControl = new FormControl("1", [
        Validators.required,
        Validators.min(1),
        Validators.max(this.tire.stock)
      ]);
    }
  }

  /**
   * onlyNumber
   */
  public onlyNumber(evt: KeyboardEvent) {
    const code = evt.which ? evt.which : evt.keyCode;
    if (
      (code < 48 || code > 57) &&
      (code < 96 || code > 105) &&
      code !== 190 &&
      code !== 110 &&
      code !== 8 &&
      code !== 9
    ) {
      return false;
    } else {
      return true;
    }
  }
}
