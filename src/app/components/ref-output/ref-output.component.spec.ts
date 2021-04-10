import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefOutputComponent } from './ref-output.component';

describe('RefOutputComponent', () => {
  let component: RefOutputComponent;
  let fixture: ComponentFixture<RefOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
