import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { isPlatformBrowser } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public isLoadingLogin: boolean = false;

  constructor(
    private readonly _authService: AuthService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    @Inject(PLATFORM_ID) private readonly _platform: Object
  ) {
    this.formLogin = this._formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {}

  public onSubmit(evt: any) {
    // console.log(this.formLogin)
    const { username, password } = this.formLogin.value;

    this.isLoadingLogin = true;
    this._authService.loginAdmin(username, password).subscribe(
      res => this._router.navigate(["/admin"]),
      err => {
        console.error(err);
        this.isLoadingLogin = false;
      },
      () => (this.isLoadingLogin = false)
    );
  }
}
