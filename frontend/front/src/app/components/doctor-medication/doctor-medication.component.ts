import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medication, MedicationControllerService, SideEffect, SideEffectControllerService } from 'build/openapi';
import { stringify } from 'querystring';

@Component({
  selector: 'app-doctor-medication',
  templateUrl: './doctor-medication.component.html',
  styleUrls: ['./doctor-medication.component.css']
})
/*     id?: number;
    name?: string;
    sideEffects?: Array<SideEffect>;
    medInfos?: Array<MedInfo>;
    dosage?: number;*/
export class DoctorMedicationComponent implements OnInit {
  allSideEffects: SideEffect[];
  currentSideEffects: SideEffect[];
  medications: Medication[];
  visible: boolean = false;
  action: boolean = false;
  newSideEffect: SideEffect = {
    name : ""
  }
  newMedication:Medication = {
    name: "",
    dosage: 0
  }
  constructor(private router:Router, private medicationService:MedicationControllerService, private sideEffectService: SideEffectControllerService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('authenticatedUserRole')!= "D")this. navigateLogin()
    this.updateTableSideEffects();
  }
  cancel(){
    this.visible = false;
    this.updateTable();
  }
  navigateLogin(){
    this.router.navigate(['/login']);
  }
  onSubmit(){
    this.visible = false;
    this.newMedication.sideEffects = this.currentSideEffects;
    this.medicationService.createMedication(this.newMedication).subscribe(x=>this.updateTable());
  }
  createMedication(){
    this.newMedication.idMedication  = null;
    this.sideEffectService;
    this.currentSideEffects = [];
    this.visible = true;
    this.action = true;
  }
  deleteMedication(id: number){
    this.medicationService.deleteMedication(id).subscribe(x=>this.updateTable());
  }
  editMedication(selectedMedication : Medication){
    this.action= false;
    this.newMedication = selectedMedication;
    this.repairTable(selectedMedication.sideEffects);
    console.log(selectedMedication.sideEffects);
    this.currentSideEffects= selectedMedication.sideEffects;
    this.visible = true;
  }
  createSideEffect(){
    this.sideEffectService.createSideEffect(this.newSideEffect).subscribe(x=>this.updateTableSideEffects());
  }
  deleteSideEffect(id:number){
    this.sideEffectService.deleteSideEffect(id).subscribe(x=>{this.updateTableSideEffects();
    this.currentSideEffects.splice(this.currentSideEffects.indexOf(this.currentSideEffects.find(x=>x.idSideEffect == id)))
    }); 
  }
  updateTable(){
    this.medicationService.getAllMedications().subscribe(x=>{this.medications = x
      x.forEach(element => {
       if(typeof(element)==='number'){ 
       let sarma : any;
       sarma = element;
       x.splice(x.indexOf(element));
       let sarma2 : number;
       this.medicationService.getMedicationId(sarma).subscribe(uai => {x.push(uai);
        
      });}});})}
  navigateDoctorMain(){
    this.router.navigate(['doctor/main']);
  }
  modifyCurrentSideEffects(sideEffect: SideEffect){
    if (this.currentSideEffects.some(x=>{return sideEffect.idSideEffect === x.idSideEffect;}))
    {
      this.currentSideEffects.splice(this.currentSideEffects.indexOf(sideEffect));
    }
    else{
      this.currentSideEffects.push(sideEffect);
    }
  }
  checked(sideEffect: SideEffect): boolean{
    if (this.currentSideEffects.some(x=>{return sideEffect.idSideEffect === x.idSideEffect;}))
    return true
    else
    return false
  }
  updateTableSideEffects(){
    this.updateTable();
    this.sideEffectService.getSideEffects().subscribe(x=>{this.allSideEffects = x
      x.forEach(element => {
        if(typeof(element)==='number'){
          let sarma: any;
          sarma = element;
          x.splice(x.indexOf(element));
          this.sideEffectService.getSideEffectId(sarma).subscribe(uai =>{
            x.push(uai)
            console.log(uai)
          })

        }
      });
    }
      );
  }
  repairTable(x: SideEffect[]){
    x.forEach(element => {
      if(typeof(element)==='number'){
        let sarma: any;
        sarma = element;
        this.sideEffectService.getSideEffectId(sarma).subscribe(uai =>{
          x.push(uai)
          console.log(uai)
        })

      }
      x.forEach(element=>{
        if(typeof(element)==='number')
        x.splice(x.indexOf(element));
      })
  })}
}
