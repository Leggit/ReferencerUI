import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefInputComponent } from './ref-input.component';

describe('RefInputComponent', () => {
  let component: RefInputComponent;
  let fixture: ComponentFixture<RefInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
