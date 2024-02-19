import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotraFormComponent } from './gotra-form.component';

describe('GotraFormComponent', () => {
  let component: GotraFormComponent;
  let fixture: ComponentFixture<GotraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GotraFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GotraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
