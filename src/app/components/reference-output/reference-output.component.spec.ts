import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceOutputComponent } from './reference-output.component';

describe('RefOutputComponent', () => {
  let component: ReferenceOutputComponent;
  let fixture: ComponentFixture<ReferenceOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
