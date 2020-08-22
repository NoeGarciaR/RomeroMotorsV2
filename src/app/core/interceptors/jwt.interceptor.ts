import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { map, mergeMap, mergeMapTo, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly _authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this._authService.isAuthenticatedAdmin().pipe(
      map(isAuth => (isAuth ? isAuth.token : "")),
      switchMap(token => {
        const authReq = request.clone({
          headers: request.headers.set("x-auth-token", token)
        });
        return next.handle(authReq);
      })
    );
    // return this.getToken().pipe(

    // );

    // .do((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     // do stuff with response if you want
    //   }
    // }, (response: HttpErrorResponse) => { });
  }
}
