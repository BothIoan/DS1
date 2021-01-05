import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaregiverMainComponent } from './components/caregiver-main/caregiver-main.component';
import { DoctorCaregiversComponent } from './components/doctor-caregivers/doctor-caregivers.component';
import { DoctorMainComponent } from './components/doctor-main/doctor-main.component';
import { DoctorMedicationComponent } from './components/doctor-medication/doctor-medication.component';
import { DoctorPatientsPrescribeComponent } from './components/doctor-patients-prescribe/doctor-patients-prescribe.component';
import { DoctorPatientsComponent } from './components/doctor-patients/doctor-patients.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PatientMainComponent } from './components/patient-main/patient-main.component';

const routes: Routes = [
  {path: 'doctor/main',component:DoctorMainComponent},
  {path: 'doctor/patients', component:DoctorPatientsComponent},
  {path: 'doctor/caregivers', component:DoctorCaregiversComponent},
  {path: 'doctor/medication', component:DoctorMedicationComponent},
  {path: 'caregiver/main/:id', component:CaregiverMainComponent},
  {path: 'patient/main/:id',component:PatientMainComponent},
  {path: 'doctor/patient/prescription/:id',component:DoctorPatientsPrescribeComponent},
  {path: 'login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
