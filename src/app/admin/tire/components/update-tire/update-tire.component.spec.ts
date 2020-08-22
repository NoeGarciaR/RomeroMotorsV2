import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTireComponent } from './update-tire.component';

describe('UpdateTireComponent', () => {
  let component: UpdateTireComponent;
  let fixture: ComponentFixture<UpdateTireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
