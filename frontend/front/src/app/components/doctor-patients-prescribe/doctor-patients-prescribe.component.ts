import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicationControllerService, MedInfo, MedInfoControllerService, Patient, PatientControllerService } from 'build/openapi';
import { Medication } from 'build/openapi/model/medication';

@Component({
  selector: 'app-doctor-patients-prescribe',
  templateUrl: './doctor-patients-prescribe.component.html',
  styleUrls: ['./doctor-patients-prescribe.component.css']
})
export class DoctorPatientsPrescribeComponent implements OnInit {
    medicationList: Medication[] =[];
    prescriptions: MedInfo[] = [];
    patient: Patient = {};
    medName: string;
    newPrescription:MedInfo ={
      interval: 0,
      period: 0,
    };
    visible:boolean = false;
    editCreate:boolean = true;
    constructor(private router:Router,private medInfoService: MedInfoControllerService, private patientService: PatientControllerService,private route: ActivatedRoute, private medicationService: MedicationControllerService) { }
    ngOnInit(): void {
      if(sessionStorage.getItem('authenticatedUserRole')!= "D")this. navigateLogin()
      this.patientService.getPatientById(this.route.snapshot.params['id']).subscribe(x=>{this.patient = x;
        console.log(this.patient);
        this.newPrescription.patient = this.patient;
        
        this.updateTable();
      });
    }
    navigateLogin(){
      this.router.navigate(['/login']);
    }
    updateTable(){
      this.medInfoService.getMedInfosByPatient(this.patient.idPatient).subscribe(x=>this.prescriptions = x);
      this.medicationService.getAllMedications().subscribe(x=>this.medicationList = x);
    }
    createPrescription(){
      this.visible=true;
      this.newPrescription.idMedInfo = null;
    }

    deletePrescription(id: number){
      this.medInfoService.deleteMedInfo(id).subscribe(x=>this.updateTable())
    }
    navigateDoctorPatients(){
      this.router.navigate(['doctor/patients']);
    }
    onSubmit(){
      
      this.newPrescription.medication = this.medicationList.find(x=>x.name == this.medName);
      console.log(this.newPrescription);
      
     this.medInfoService.createMedInfo(this.newPrescription).subscribe(x=>{this.visible=false;this.updateTable()});
    }
  
    cancel(){
      this.visible = false;
      this.updateTable();
    }
  
  }
  
