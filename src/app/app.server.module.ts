import { NgModule } from "@angular/core";
import { ServerModule, ServerTransferStateModule } from "@angular/platform-server";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";




@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
  ],
  // providers:[{ provide: CookieService, useClass: CookieBackendService }],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
