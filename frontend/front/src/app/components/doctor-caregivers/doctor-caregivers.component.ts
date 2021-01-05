import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaregiverControllerService, Patient, PatientControllerService } from 'build/openapi';
import { Caregiver } from 'build/openapi/model/caregiver';


@Component({
  selector: 'app-doctor-caregivers',
  templateUrl: './doctor-caregivers.component.html',
  styleUrls: ['./doctor-caregivers.component.css']
})

/*    id?: number;
    name?: string;
    date?: string;
    gender?: Caregiver.GenderEnum;
    address?: string;
    patients?: Array<Patient>;
    password?: string;
    */
export class DoctorCaregiversComponent implements OnInit {  
    truePatients: Patient[] =[];
    falsePatients: Patient[] =[];
    newCaregiver:Caregiver ={
      name: '',
      date: '',
      gender: Caregiver.GenderEnum.Male,
      address: '',
      password: '',
      patients: []
    };
    newCaregiver2:Caregiver = {};
    genderList;
    action : boolean = false;
    visible:boolean = false;
    editCreate:boolean = true;
    caregivers:Caregiver[] = [];
    constructor(private router:Router,private caregiverService:CaregiverControllerService, private patientService: PatientControllerService) { }
    ngOnInit(): void {
      if(sessionStorage.getItem('authenticatedUserRole')!= "D")this. navigateLogin()
      this.caregiverService.getAllCaregivers().subscribe(x=>this.caregivers = x);
      this.genderList = Object.keys(Caregiver.GenderEnum);
    }
    reloadTable(){
      this.caregiverService.getAllCaregivers().subscribe(x=>this.caregivers = x);
    }
  
    navigateLogin(){
      this.router.navigate(['/login']);
    }
    createCaregiver(){
      this.truePatients = [];
      this.patientService.getAllPatients().subscribe(x=>this.falsePatients = x);
      this.visible=true;
      this.newCaregiver.idCaregiver = null;
      this.action= true;
    }
  
    editCaregiver(selectedCaregiver: Caregiver){
      this.patientService.getPatientsByCaregiver(selectedCaregiver.idCaregiver).subscribe( x=> this.truePatients = x);
      this.patientService.getPatientsNotCaregiver(selectedCaregiver.idCaregiver).subscribe(x=>this.falsePatients = x);
      this.visible = true;
      this.newCaregiver = selectedCaregiver;
      this.action = false;
    }
    
    modifyCurrentPatients(patient: Patient){
      if(this.truePatients.some(x=>x.idPatient ===patient.idPatient))
      {
        this.truePatients.splice(this.truePatients.indexOf(patient),1);
        this.falsePatients.push(patient);
      
      }
      else
      {
        this.falsePatients.splice(this.falsePatients.indexOf(patient),1);
        this.truePatients.push(patient);
      }
    }

    deleteCaregiver(id: number){
      this.caregiverService.deleteCaregiver(id).subscribe(
        x=>this.caregiverService.getAllCaregivers().subscribe(x=>this.caregivers = x)
      )
    }
   
    navigateDoctorMain(){
      this.router.navigate(['login']);
    }
  
    onSubmit(){
      this.newCaregiver.patients = this.truePatients;
      console.log(this.newCaregiver)
      this.caregiverService.createCaregiver(this.newCaregiver).subscribe(x=>{
      this.reloadTable();this.visible= false;
      this.visible = false;
      })
    }
  
    cancel(){
      this.visible = false;
      this.reloadTable();
    }
  
  }
  
