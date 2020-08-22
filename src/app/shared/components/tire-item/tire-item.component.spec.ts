import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TireItemComponent } from './tire-item.component';

describe('TireItemComponent', () => {
  let component: TireItemComponent;
  let fixture: ComponentFixture<TireItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TireItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TireItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
