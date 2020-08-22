import { Component, OnInit } from "@angular/core";
import { TireService } from "src/app/core/services/tire.service";
import { Tire } from "src/app/core/models/Tire.model";
import { COLUMNS_DEFS } from "./columns";
import { Router } from "@angular/router";
import { GridAgOptionsCellComponent } from "src/app/shared/components/grid-ag/grid-ag-options-cell.component";
@Component({
  selector: "app-list-tire",
  templateUrl: "./list-tire.component.html",
  styleUrls: ["./list-tire.component.scss"]
})
export class ListTireComponent implements OnInit {
  public tire: Tire[] = [];

  public columnDefs = COLUMNS_DEFS;

  public frameworkComponents = {
    optionsRenderer: GridAgOptionsCellComponent
  };

  constructor(
    private readonly _tireService: TireService,
    private readonly _router: Router
  ) {
    // this._tireService
    //   .get({ page: "1", limit: "100000" })
    //   .subscribe(res => (this.tire = res));
  }

  ngOnInit(): void {}

  public goToNewTire(): void {
    this._router.navigate(["/admin", "tire", "add"]);
  }
}
