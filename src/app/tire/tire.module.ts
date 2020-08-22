import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TireRoutingModule } from './tire-routing.module';
import { DetailTireComponent } from './components/detail-tire/detail-tire.component';


@NgModule({
  declarations: [DetailTireComponent],
  imports: [
    CommonModule,
    TireRoutingModule
  ]
})
export class TireModule { }
