import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultSearchComponent } from "./components/result-search/result-search.component";

const routes: Routes = [
  {
    path: "",
    component: ResultSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
