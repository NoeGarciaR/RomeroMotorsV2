import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailTireComponent } from './components/detail-tire/detail-tire.component';


const routes: Routes = [
  {
    path:'detail/:id',
    component:DetailTireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TireRoutingModule { }
