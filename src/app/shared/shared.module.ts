import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TireItemComponent } from "./components/tire-item/tire-item.component";
import { ListHorizontalComponent } from "./components/list/list-horizontal/list-horizontal.component";
import { ListVerticalComponent } from "./components/list/list-vertical/list-vertical.component";
import { GridAgOptionsCellComponent } from "./components/grid-ag/grid-ag-options-cell.component";
import { MaterialModule } from "./material.module";
import { ButtonWhatsappComponent } from './components/button-whatsapp/button-whatsapp.component';
import { AgGridModule } from 'ag-grid-angular';
import { SearchBarTireComponent } from './components/search-bar-tire/search-bar-tire.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    TireItemComponent,
    ListHorizontalComponent,
    ListVerticalComponent,
    GridAgOptionsCellComponent,
    ButtonWhatsappComponent,
    SearchBarTireComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgGridModule.withComponents([
      GridAgOptionsCellComponent
    ])
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    TireItemComponent,
    ListHorizontalComponent,
    ListVerticalComponent,
    GridAgOptionsCellComponent,
    ButtonWhatsappComponent,
    SearchBarTireComponent,
    AgGridModule
  ]
})
export class SharedModule {}
