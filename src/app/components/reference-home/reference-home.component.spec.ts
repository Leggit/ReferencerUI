import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceHomeComponent } from './reference-home.component';

describe('ReferenceFormComponent', () => {
  let component: ReferenceHomeComponent;
  let fixture: ComponentFixture<ReferenceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
