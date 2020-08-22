import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSearchGenericComponent } from './result-search-generic.component';

describe('ResultSearchGenericComponent', () => {
  let component: ResultSearchGenericComponent;
  let fixture: ComponentFixture<ResultSearchGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSearchGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSearchGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
