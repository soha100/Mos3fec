import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfileCompleteComponent } from './doctor-profile-complete.component';

describe('DoctorProfileCompleteComponent', () => {
  let component: DoctorProfileCompleteComponent;
  let fixture: ComponentFixture<DoctorProfileCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorProfileCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorProfileCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
