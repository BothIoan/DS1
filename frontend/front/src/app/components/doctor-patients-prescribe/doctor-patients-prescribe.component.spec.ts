import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientsPrescribeComponent } from './doctor-patients-prescribe.component';

describe('DoctorPatientsPrescribeComponent', () => {
  let component: DoctorPatientsPrescribeComponent;
  let fixture: ComponentFixture<DoctorPatientsPrescribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPatientsPrescribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPatientsPrescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
