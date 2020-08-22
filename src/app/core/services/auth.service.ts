import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { StorageMap } from "@ngx-pwa/local-storage";
import { map, catchError } from "rxjs/operators";
import { Observable, of, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    // private readonly _storageService: StorageService
    private readonly _storage: StorageMap,
    private readonly _httpClient: HttpClient
  ) {}

  public loginAdmin(
    usernameOrEmail: string,
    password: string
  ): Observable<any> {
    return this._httpClient
      .post(
        `${environment.baseURL}/staff/auth`,
        {
          username: usernameOrEmail,
          password
        },
        {
          observe: "response"
        }
      )
      .pipe(
        map((res: any) => {
          const TOKEN = res.headers.get("x-auth-token");
          this.setAdmin({
            ...res.body.data,
            token: TOKEN
          }).subscribe();
          return res.body;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  public setAdmin(user: any): Observable<any> {
    return this._storage.set("userAdmin", JSON.stringify(user), {
      type: "string"
    });
  }

  public logoutAdmin(): Observable<any> {
    return this._storage.delete("userAdmin");
  }

  public isAuthenticatedAdmin(): Observable<any> {
    return this._storage.get("userAdmin", { type: "string" }).pipe(
      map(value => {
        return value ? JSON.parse(value) : null;
      })
    );
  }
}
