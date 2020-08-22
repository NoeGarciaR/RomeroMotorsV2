import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTireComponent } from './list-tire.component';

describe('ListTireComponent', () => {
  let component: ListTireComponent;
  let fixture: ComponentFixture<ListTireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
