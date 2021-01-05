package com.DS.back.controller;

import com.DS.back.model.Caregiver;
import com.DS.back.repos.CaregiverRepo;
import com.DS.back.repos.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CaregiverController {
    @Autowired
    CaregiverRepo caregiverRepo;
    @Autowired
    PatientRepo patientRepo;
    @GetMapping("caregivers/r")
    public List<Caregiver> getAllCaregivers(){
        return caregiverRepo.findAll();
    }

    @DeleteMapping("caregivers/d/{id}")
    public ResponseEntity<?> deleteCaregiver(@PathVariable(value = "id") Long id){
        Caregiver toDelete = caregiverRepo.findByIdCaregiver(id).get();
        toDelete.getPatients().forEach(x->x.setCaregiver(null));
        toDelete.getPatients().clear();
        caregiverRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("caregivers/cu")
    public Caregiver createCaregiver(@RequestBody Caregiver caregiver){
       /*
     System.out.println(caregiver.getPatients().size());
        */
        List<Long> patients = new ArrayList<>();
        caregiver.getPatients().forEach(x->patients.add(x.getIdPatient()));
        caregiver.getPatients().clear();
        caregiverRepo.save(caregiver);
        patients.forEach(x->caregiver.getPatients().add(patientRepo.findByIdPatient(x).orElse(null)));
        caregiver.getPatients().forEach(x->x.setCaregiver(caregiver));
        return caregiverRepo.save(caregiver);
    }
}
