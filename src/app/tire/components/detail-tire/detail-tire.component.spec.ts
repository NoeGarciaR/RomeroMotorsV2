import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTireComponent } from './detail-tire.component';

describe('DetailTireComponent', () => {
  let component: DetailTireComponent;
  let fixture: ComponentFixture<DetailTireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
