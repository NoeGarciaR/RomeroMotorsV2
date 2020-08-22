import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ResultSearchTireComponent } from './pages/result-search-tire/result-search-tire.component';
import { ResultSearchGenericComponent } from './pages/result-search-generic/result-search-generic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterNavbarLayoutComponent } from './pages/filter-navbar-layout/filter-navbar-layout.component';


@NgModule({
  declarations: [ResultSearchTireComponent, ResultSearchGenericComponent, FilterNavbarLayoutComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
