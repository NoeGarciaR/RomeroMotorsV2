import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeasureComponent } from './list-measure.component';

describe('ListMeasureComponent', () => {
  let component: ListMeasureComponent;
  let fixture: ComponentFixture<ListMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
