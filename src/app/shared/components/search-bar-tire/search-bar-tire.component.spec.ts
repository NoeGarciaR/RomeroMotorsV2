import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTireComponent } from './search-bar-tire.component';

describe('SearchBarTireComponent', () => {
  let component: SearchBarTireComponent;
  let fixture: ComponentFixture<SearchBarTireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarTireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
