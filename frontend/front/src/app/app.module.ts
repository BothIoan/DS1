import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DoctorMainComponent } from './components/doctor-main/doctor-main.component';
import { PatientMainComponent } from './components/patient-main/patient-main.component';
import { CaregiverMainComponent } from './components/caregiver-main/caregiver-main.component';
import { DoctorPatientsComponent } from './components/doctor-patients/doctor-patients.component';
import { DoctorMedicationComponent } from './components/doctor-medication/doctor-medication.component';
import { DoctorCaregiversComponent } from './components/doctor-caregivers/doctor-caregivers.component';
import { DoctorPatientsPrescribeComponent } from './components/doctor-patients-prescribe/doctor-patients-prescribe.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorMainComponent,
    PatientMainComponent,
    CaregiverMainComponent,
    DoctorPatientsComponent,
    DoctorMedicationComponent,
    DoctorCaregiversComponent,
    DoctorPatientsPrescribeComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
