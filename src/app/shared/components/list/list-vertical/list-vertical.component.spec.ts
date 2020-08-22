import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerticalComponent } from './list-vertical.component';

describe('ListVerticalComponent', () => {
  let component: ListVerticalComponent;
  let fixture: ComponentFixture<ListVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
