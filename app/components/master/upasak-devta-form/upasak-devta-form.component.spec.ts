import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpasakDevtaFormComponent } from './upasak-devta-form.component';

describe('UpasakDevtaFormComponent', () => {
  let component: UpasakDevtaFormComponent;
  let fixture: ComponentFixture<UpasakDevtaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpasakDevtaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpasakDevtaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
