import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshanRegistrationFormComponent } from './darshan-registration-form.component';

describe('DarshanRegistrationFormComponent', () => {
  let component: DarshanRegistrationFormComponent;
  let fixture: ComponentFixture<DarshanRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarshanRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarshanRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
