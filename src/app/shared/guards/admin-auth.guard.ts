import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._authService.isAuthenticatedAdmin().pipe(
      map(isAuth => {
        // console.log(state);
        if (state.url === "/admin/auth") {
          return isAuth ? this._router.parseUrl("/admin") : true;
        } else {
          return isAuth ? true : this._router.parseUrl("/admin/auth");
        }
      })
    );
  }
}
