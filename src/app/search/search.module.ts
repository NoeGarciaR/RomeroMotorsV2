import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResultSearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
