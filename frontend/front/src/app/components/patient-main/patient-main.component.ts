import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedInfo, MedInfoControllerService } from 'build/openapi';
import { PatientControllerService } from 'build/openapi/api/patientController.service';
import { Patient } from 'build/openapi/model/patient';

@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.css']
})
export class PatientMainComponent implements OnInit {  
  patient :Patient ={
    name: '',
    date: '',
    gender: Patient.GenderEnum.Male,
    address: '',
    password: '',
    record: ''
  };
  medInfos : MedInfo []
  constructor(private router:Router,private patientService:PatientControllerService, private route: ActivatedRoute,private medInfoService : MedInfoControllerService) { }
  ngOnInit(): void {
    if(sessionStorage.getItem('authenticatedUserRole')!= "P" /*|| (this.route.params['id']!= sessionStorage.getItem('authenticatedUserID'))*/)this. navigateLogin()
    this.patientService.getPatientById(this.route.snapshot.params['id']).subscribe(x=>{this.patient = x
    this.medInfoService.getMedInfosByPatient(this.patient.idPatient).subscribe(x=>this.medInfos = x);});
  }
  navigateLogin(){
    this.router.navigate(['login']);
  }
}
