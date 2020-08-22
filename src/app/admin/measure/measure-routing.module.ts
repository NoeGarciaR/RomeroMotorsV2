import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListMeasureComponent } from "./components/list-measure/list-measure.component";
import { AddMeasureComponent } from './components/add-measure/add-measure.component';

const routes: Routes = [
  {
    path: "",
    component: ListMeasureComponent
  },
  {
    path: "add",
    component: AddMeasureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasureRoutingModule {}
