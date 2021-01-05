import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverMainComponent } from './caregiver-main.component';

describe('CaregiverMainComponent', () => {
  let component: CaregiverMainComponent;
  let fixture: ComponentFixture<CaregiverMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
