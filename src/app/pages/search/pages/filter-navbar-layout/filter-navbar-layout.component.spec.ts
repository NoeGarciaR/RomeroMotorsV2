import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNavbarLayoutComponent } from './filter-navbar-layout.component';

describe('FilterNavbarLayoutComponent', () => {
  let component: FilterNavbarLayoutComponent;
  let fixture: ComponentFixture<FilterNavbarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterNavbarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNavbarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
