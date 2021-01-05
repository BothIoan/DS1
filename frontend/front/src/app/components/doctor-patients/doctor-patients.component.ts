import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient, PatientControllerService } from 'build/openapi';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.css']
})
export class DoctorPatientsComponent implements OnInit {

  
  newPatient:Patient ={
    name: '',
    date: '',
    gender: Patient.GenderEnum.Male,
    address: '',
    password: '',
    record: ''
  };
  genderList;
  action : boolean = false;
  visible:boolean = false;
  editCreate:boolean = true;
  patients:Patient[] = [];
  constructor(private router:Router,private patientService:PatientControllerService) { }
  ngOnInit(): void {
    if(sessionStorage.getItem('authenticatedUserRole')!= "D")this. navigateLogin()
    this.patientService.getAllPatients().subscribe(x=>this.patients = x);
    this.genderList = Object.keys(Patient.GenderEnum);
  }
  reloadTable(){
    this.patientService.getAllPatients().subscribe(x=>this.patients = x);
  }
  navigateLogin(){
    this.router.navigate(['/login']);
  }
  createPatient(){
    this.visible=true;
    this.newPatient.idPatient = null;
    this.action= true;
  }

  editPatient(selectedPatient: Patient){
    this.visible = true;
    this.newPatient = selectedPatient;
    this.action = false;
  }

  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe(
      x=>this.patientService.getAllPatients().subscribe(x=>this.patients = x)
    )
  }

  prescribePatient(id:number){
    this.router.navigate(['doctor/patient/prescription',id]);
  }
 
  navigateDoctorMain(){
    this.router.navigate(['doctor/main']);
  }
  onSubmit(){
    this.patientService.createPatient(this.newPatient).subscribe(x=>this.reloadTable())
    this.visible= false;
  }

  cancel(){
    this.visible = false;
    this.reloadTable();
  }

}
