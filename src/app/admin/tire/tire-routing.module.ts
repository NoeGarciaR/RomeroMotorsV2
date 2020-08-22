import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTireComponent } from './components/list-tire/list-tire.component';
import { AddTireComponent } from './components/add-tire/add-tire.component';
import { UpdateTireComponent } from './components/update-tire/update-tire.component';


const routes: Routes = [
  {
    path: "",
    component: ListTireComponent
  },
  {
    path: "add",
    component: AddTireComponent
  },
  {
    path: "update/:id",
    component: UpdateTireComponent
  }
  // {
  //   path: "delete",
  //   component: ListTireComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TireRoutingModule { }
