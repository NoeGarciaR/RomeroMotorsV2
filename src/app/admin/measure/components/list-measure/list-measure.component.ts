import { Component, OnInit } from '@angular/core';
import { COLUMNS_DEFS } from "./columns";
import { Measure } from 'src/app/core/models/Measure.model';
import { Router } from '@angular/router';
import { MeasureService } from 'src/app/core/services/measure.service';
import { GridAgOptionsCellComponent } from 'src/app/shared/components/grid-ag/grid-ag-options-cell.component';
@Component({
  selector: 'app-list-measure',
  templateUrl: './list-measure.component.html',
  styleUrls: ['./list-measure.component.scss']
})
export class ListMeasureComponent implements OnInit {
  public measurements: Measure[] = [];

  public columnDefs = COLUMNS_DEFS;

  public frameworkComponents = {
    optionsRenderer: GridAgOptionsCellComponent
  };

  constructor(
    private readonly _measureService: MeasureService,
    private readonly _router: Router
  ) {
    this._measureService
      .getObject()
      .subscribe(res => this.measurements = res);
  }

  ngOnInit(): void {}

  public goToNewTire(): void {
    this._router.navigate(["/admin", "measure", "add"]);
  }

}
