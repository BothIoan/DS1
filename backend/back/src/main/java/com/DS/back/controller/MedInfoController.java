package com.DS.back.controller;

import com.DS.back.model.MedInfo;
import com.DS.back.model.Medication;
import com.DS.back.model.Patient;
import com.DS.back.repos.MedInfoRepo;
import com.DS.back.repos.MedicationRepo;
import com.DS.back.repos.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MedInfoController {
    @Autowired
    MedInfoRepo medInfoRepo;
    @Autowired
    PatientRepo patientRepo;
    @Autowired
    MedicationRepo medicationRepo;
    @GetMapping("/medInfo/r")
    public List<MedInfo> getAllMedInfos() {
        return medInfoRepo.findAll();
    }
    @DeleteMapping("/medInfo/d/{id}")
    public ResponseEntity<?> deleteMedInfo(@PathVariable(value = "id")Long id){
        //MedInfo medInfo = medInfoRepo.findById(id).orElse(null);
        //assert medInfo != null;
        //Medication medication = medicationRepo.findById(medInfo.getMedication().getId()).orElse(null);
        //Patient patient = patientRepo.findById(medInfo.getPatient().getId()).orElse(null);patient.getMedInfos().for
        medInfoRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/medInfo/cu")
    public MedInfo createMedInfo(@RequestBody MedInfo medInfo) {
        Patient patient =patientRepo.findByIdPatient(medInfo.getPatient().getIdPatient()).orElse(null);
        Medication medication = medicationRepo.findByIdMedication(medInfo.getMedication().getIdMedication()).orElse(null);
        patient.getMedInfos().add(medInfo);
        medication.getMedInfos().add(medInfo);
        medInfo.setPatient(patient);
        medInfo.setMedication(medication);
        return medInfoRepo.save(medInfo);
    }

    @GetMapping("/medInfo/patient/r/{patient_id}")
    public List<MedInfo> getMedInfosByPatient(@PathVariable(value = "patient_id")Long patient_id){
        return medInfoRepo.findByPatient_idPatient(patient_id);
    }
}
