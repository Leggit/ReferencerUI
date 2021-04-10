import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceOptionComponent } from './reference-option.component';

describe('ReferenceOptionComponent', () => {
  let component: ReferenceOptionComponent;
  let fixture: ComponentFixture<ReferenceOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
