package com.DS.back.controller;


import com.DS.back.model.Patient;
import com.DS.back.repos.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")

public class PatientController {
    @Autowired
    PatientRepo patientRepo;
    @GetMapping("/patients/r")
    public List<Patient> getAllPatients() {
        return patientRepo.findAll();
    }
    @DeleteMapping("/patients/d/{id}")
    public ResponseEntity<?> deletePatient(@PathVariable(value = "id")Long id){
        patientRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/patients/cu")
    public Patient createPatient(@RequestBody Patient patient){
        return patientRepo.save(patient);
    }

    @GetMapping("patients/notCaregiver/r/{caregiver_id}")
    public List<Patient> getPatientsNotCaregiver(@PathVariable(value = "caregiver_id")Long caregiver_id){
        List<Patient> nulls = patientRepo.findByCaregiver_idCaregiver(null);
        List<Patient> nonNulls = patientRepo.findByCaregiver_idCaregiverNot(caregiver_id);
        nulls.addAll(nonNulls);
        return nulls;
    }

    @GetMapping("patients/Caregiver/r/{caregiver_id}")
    public List<Patient> getPatientsByCaregiver(@PathVariable(value = "caregiver_id")Long caregiver_id){
        return patientRepo.findByCaregiver_idCaregiver(caregiver_id);
    }

    @GetMapping("patient/r/{id}")
    public Patient getPatientById(@PathVariable(value = "id")Long id){
        return patientRepo.findByIdPatient(id).orElse(Patient.builder().idPatient((long)-1).build());
    }
}
