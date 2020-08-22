import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTireComponent } from './delete-tire.component';

describe('DeleteTireComponent', () => {
  let component: DeleteTireComponent;
  let fixture: ComponentFixture<DeleteTireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
