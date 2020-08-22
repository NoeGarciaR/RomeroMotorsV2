import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSearchTireComponent } from './result-search-tire.component';

describe('ResultSearchTireComponent', () => {
  let component: ResultSearchTireComponent;
  let fixture: ComponentFixture<ResultSearchTireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSearchTireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSearchTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
