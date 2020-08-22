import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHorizontalComponent } from './list-horizontal.component';

describe('ListHorizontalComponent', () => {
  let component: ListHorizontalComponent;
  let fixture: ComponentFixture<ListHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
