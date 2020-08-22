import { Component, OnInit, Input, AfterContentChecked } from "@angular/core";
import { Doc, Tire } from 'src/app/core/models/personalities/Tire.model';
import { Data } from 'src/app/core/models/personalities/SpeedLoad.model';

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
  @Input("tire") public tire: Doc= null;

  public speedData: Data;
  public loadData: Data;


  public quantityFormControl: FormControl;
  constructor( public _speedLoad: SpeedLoadService) {
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
      //console.log(this.tire);
      this.loadData = this.getLoad( this.tire.loadIndexId[0]);
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

  getLoad( id: string ) {
    let status: Data;
    status = this._speedLoad.searchLoadId( id );
    console.log(status);
    return status;
  }
}
