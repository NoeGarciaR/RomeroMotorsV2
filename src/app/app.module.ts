import {
  BrowserModule,
  BrowserTransferStateModule
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ConvertUrlInterceptor } from "./core/interceptors/convert-url.interceptor";
import { EcommerceComponent } from "./layouts/ecommerce/ecommerce.component";
import { SharedModule } from "./shared/shared.module";
import { NotFoundComponent } from "./not-found/not-found.component";
// import { CookieService } from 'ngx-cookie-service';
// import { CookiesService } from 'ngx-universal-cookies/src/cookies.service';
import { CookieModule } from "@gorniv/ngx-universal";
import { AgGridModule } from "ag-grid-angular";
import { JwtInterceptor } from "./core/interceptors/jwt.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, EcommerceComponent, NotFoundComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.forRoot(),
    BrowserTransferStateModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ConvertUrlInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
