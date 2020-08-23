import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-navbar-layout',
  templateUrl: './filter-navbar-layout.component.html',
  styleUrls: ['./filter-navbar-layout.component.scss']
})
export class FilterNavbarLayoutComponent implements OnInit {
  private click = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ocultView() {
    if (this.click === 1){
      document.getElementById("options").style.height = "100%";
      this.click = this.click + 1;
    } else {
      document.getElementById("options").style.height = "0px";
      this.click = 1;
    }
  }
}
