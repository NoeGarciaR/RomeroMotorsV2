import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasureRoutingModule } from './measure-routing.module';
import { ListMeasureComponent } from './components/list-measure/list-measure.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddMeasureComponent } from './components/add-measure/add-measure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListMeasureComponent, AddMeasureComponent],
  imports: [
    CommonModule,
    MeasureRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MeasureModule { }
