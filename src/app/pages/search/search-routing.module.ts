import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultSearchTireComponent } from "./pages/result-search-tire/result-search-tire.component";
import { ResultSearchGenericComponent } from "./pages/result-search-generic/result-search-generic.component";

const routes: Routes = [
  {
    path: "",
    component: ResultSearchTireComponent,
  },
  {
    path: "generic",
    component: ResultSearchGenericComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
