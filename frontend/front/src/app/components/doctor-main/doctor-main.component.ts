import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-doctor-main',
  templateUrl: './doctor-main.component.html',
  styleUrls: ['./doctor-main.component.css']
})
export class DoctorMainComponent implements OnInit{
  constructor(private router:Router) {}
  ngOnInit(): void {
    if(sessionStorage.getItem('authenticatedUserRole')!= "D")this. navigateLogin()
  }
  navigateLogin(){
    this.router.navigate(['/login']);
  }
  navigatePatients(){
    this.router.navigate(['doctor/patients']);
  }
  navigateCaregivers(){
    this.router.navigate(['doctor/caregivers']);
  }
  navigateMedication(){
    this.router.navigate(['doctor/medication']);
  }

  navigateAddMedication(){
    this.router.navigate(['doctor/add/medication']);
  }

  navigateAddCaregiver(){
    this.router.navigate(['doctor/add/caregiver']);
  }
}