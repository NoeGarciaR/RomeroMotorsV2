import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ResultSearchTireComponent } from './pages/result-search-tire/result-search-tire.component';
import { ResultSearchGenericComponent } from './pages/result-search-generic/result-search-generic.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ResultSearchTireComponent, ResultSearchGenericComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
