import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TireRoutingModule } from './tire-routing.module';
import { AddTireComponent } from './components/add-tire/add-tire.component';
import { UpdateTireComponent } from './components/update-tire/update-tire.component';
import { DeleteTireComponent } from './components/delete-tire/delete-tire.component';
import { ListTireComponent } from './components/list-tire/list-tire.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridAgOptionsCellComponent } from 'src/app/shared/components/grid-ag/grid-ag-options-cell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddTireComponent, UpdateTireComponent, DeleteTireComponent, ListTireComponent],
  imports: [
    CommonModule,
    TireRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class TireModule { }
