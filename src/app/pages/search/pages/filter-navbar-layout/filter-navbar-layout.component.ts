import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-navbar-layout',
  templateUrl: './filter-navbar-layout.component.html',
  styleUrls: ['./filter-navbar-layout.component.scss']
})
export class FilterNavbarLayoutComponent implements OnInit {
  public isShowOptions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowOptions() {
    this.isShowOptions = !this.isShowOptions;
  }
}
