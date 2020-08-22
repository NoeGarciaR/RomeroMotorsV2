import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminAuthGuard } from "../shared/guards/admin-auth.guard";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(
            mod => mod.DashboardModule
          )
      },
      {
        path: "tire",
        loadChildren: () =>
          import("./tire/tire.module").then(mod => mod.TireModule)
      },
      {
        path: "measure",
        loadChildren: () =>
          import("./measure/measure.module").then(mod => mod.MeasureModule)
      },
      {
        path: "user",
        loadChildren: () =>
          import("./user/user.module").then(mod => mod.UserModule)
      }
    ]
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then(mod => mod.AuthModule),
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
