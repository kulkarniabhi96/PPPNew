import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilyDetailsFormComponent } from './add-family-details-form.component';

describe('AddFamilyDetailsFormComponent', () => {
  let component: AddFamilyDetailsFormComponent;
  let fixture: ComponentFixture<AddFamilyDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFamilyDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFamilyDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
