import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedInfoControllerService, PatientControllerService } from 'build/openapi';
import { MedicationControllerService } from 'build/openapi/api/medicationController.service';
import { SideEffectControllerService } from 'build/openapi/api/sideEffectController.service';
import { MedInfo } from 'build/openapi/model/medInfo';
import { Patient } from 'build/openapi/model/patient';

@Component({
  selector: 'app-caregiver-main',
  templateUrl: './caregiver-main.component.html',
  styleUrls: ['./caregiver-main.component.css']
})
export class CaregiverMainComponent implements OnInit {
  
    currentMedInfos: MedInfo[];
    patients: Patient[];
    visible: boolean = false;
    constructor(private router:Router, private medInfoService:MedInfoControllerService, private patientService: PatientControllerService, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      console.log("ajunge2")
      if(sessionStorage.getItem('authenticatedUserRole') != "C"/*|| (this.route.params['id']!= sessionStorage.getItem('authenticatedUserID'))*/) this.navigateLogin();
      console.log("ajunge3")
      this.patientService.getPatientsByCaregiver(this.route.snapshot.params['id']).subscribe(x=>this.patients = x)
    }
    navigateLogin(){
      this.router.navigate(['/login']);
    }
    viewPrescription(id:number){
      this.medInfoService.getMedInfosByPatient(id).subscribe(x=>this.currentMedInfos =x);
      this.visible = true;
    }
    cancel(){
      this.visible = false;
    }
  }  
