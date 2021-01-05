package com.DS.back.controller;


import com.DS.back.model.Medication;
import com.DS.back.repos.MedicationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MedicationController {
    @Autowired
    MedicationRepo medicationRepo;
    @GetMapping("medications/r")
    public List<Medication> getAllMedications() {
        return medicationRepo.findAll();
    }
    @DeleteMapping("medications/d/{id}")
    public ResponseEntity<?> deleteMedication(@PathVariable(value = "id")Long id){
        medicationRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    @PostMapping("medications/cu")
    public Medication createMedication(@RequestBody Medication medication){
        return medicationRepo.save(medication);
    }
    @GetMapping("medication/r/{id}")
    public Medication getMedicationId(@PathVariable(value = "id")Long id){
        return medicationRepo.findByIdMedication(id).orElse(Medication.builder().idMedication((long)-1).build());
    }
}
