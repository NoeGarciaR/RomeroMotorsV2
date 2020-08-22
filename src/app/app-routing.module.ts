import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { EcommerceComponent } from "./layouts/ecommerce/ecommerce.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FilterNavbarLayoutComponent } from './pages/search/pages/filter-navbar-layout/filter-navbar-layout.component';

const routes: Routes = [
  {
    path: "",
    component: EcommerceComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/home/home.module").then((mod) => mod.HomeModule),
      },
      {
        path: "about-us",
        loadChildren: () =>
          import("./pages/about-us/about-us.module").then(
            (mod) => mod.AboutUsModule
          ),
      },
      {
        path: "workshop",
        loadChildren: () =>
          import("./pages/workshop/workshop.module").then(
            (mod) => mod.WorkshopModule
          ),
      },
      {
        path: "contact-us",
        loadChildren: () =>
          import("./pages/contact-us/contact-us.module").then(
            (mod) => mod.ContactUsModule
          ),
      },
      {
        path: "service",
        loadChildren: () =>
          import("./pages/service/service.module").then(
            (mod) => mod.ServiceModule
          ),
      },

      {
        path: "search",
        loadChildren: () =>
          import("./pages/search/search.module").then(
            (mod) => mod.SearchModule
          ),
      },


      // {
      //   path: "tire",
      //   loadChildren: () =>
      //     import("./tire/tire.module").then(mod => mod.TireModule)
      // },
      // {
      //   path: "search",
      //   loadChildren: () =>
      //     import("./search/search.module").then(mod => mod.SearchModule)
      // },
      // {
      //   path: "shop",
      //   loadChildren: () =>
      //     import("./shop/shop.module").then(mod => mod.ShopModule)
      // }
    ],
  },
  // {
  //   path: "admin",
  //   loadChildren: () =>
  //     import("./admin/admin.module").then(mod => mod.AdminModule)
  // },
  {
    path: "prueba",
    component: FilterNavbarLayoutComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
