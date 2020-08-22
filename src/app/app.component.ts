import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { makeStateKey, DomSanitizer } from "@angular/platform-browser";
import { ShopService } from "./core/services/shop.service";
import { isPlatformBrowser } from "@angular/common";
import { MeasureService } from "./core/services/measure.service";
import { MatIconRegistry } from "@angular/material/icon";

const PEOPLE_KEY = makeStateKey("people");
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  // title = "romeroMotors";
  // cookieValue = "UNKNOWN";
  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platform: Object
  ) {
    this._matIconRegistry.addSvgIcon(
      "tire",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/images/icons/tire_icon.svg"
      )
    );
    this._matIconRegistry.addSvgIcon(
      "padlock",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/images/icons/padlock_icon.svg"
      )
    );
    this._matIconRegistry.addSvgIcon(
      "mechanic",
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/images/icons/mechanic_icon.svg"
      )
    );
  }

  ngOnInit() {
    // this._measureService.get().subscribe(res => console.log(res))
    // if (isPlatformBrowser(this.platform))
    //   setInterval(() => {
    //     const items = this._shopService.add({ name: 1 });
    //     console.log(items);
    //   }, 20000);
    // this._cookieService.put('name', 'Miguel')
  }

  getCookie(key: string) {
    // return this._cookieService.get(key);
  }
}
