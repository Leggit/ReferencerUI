import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceExampleComponent } from './reference-example.component';

describe('RefOutputComponent', () => {
  let component: ReferenceExampleComponent;
  let fixture: ComponentFixture<ReferenceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
