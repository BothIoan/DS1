import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCaregiversComponent } from './doctor-caregivers.component';

describe('DoctorCaregiversComponent', () => {
  let component: DoctorCaregiversComponent;
  let fixture: ComponentFixture<DoctorCaregiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorCaregiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCaregiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
