import { Injectable, Optional, Inject } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Request } from "express";
import { REQUEST } from "@nguniversal/express-engine/tokens";
@Injectable({
  providedIn: "root"
})
export class ConvertUrlInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject(REQUEST) protected request?: Request) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let serverReq: HttpRequest<unknown> = req;

    if (this.request) {
      if (
        !req.url.match(
          new RegExp(/https:\/\/romero-motors-api\.herokuapp\.com\/api/, "gi")
        )
      ) {
        let newUrl = `${this.request.protocol}://${this.request.get("host")}`;
        if (!req.url.startsWith("/")) {
          newUrl += "/";
        }
        newUrl += req.url;
        // console.log(newUrl)
        serverReq = req.clone({ url: newUrl });
      }
    }

    return next.handle(serverReq);
  }
}
