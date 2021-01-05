package com.DS.back.controller;

import com.DS.back.model.Caregiver;
import com.DS.back.model.Doctor;
import com.DS.back.model.Patient;
import com.DS.back.repos.CaregiverRepo;
import com.DS.back.repos.DoctorRepo;
import com.DS.back.repos.PatientRepo;
import com.DS.back.DTO.AuthResponseDTO;
import com.DS.back.DTO.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
    @RestController
    @RequestMapping("/api")

    public class AuthController {
    @Autowired
    PatientRepo patientRepo;
    @Autowired
    CaregiverRepo caregiverRepo;
    @Autowired
    DoctorRepo doctorRepo;

    @PostMapping("/login")
    public AuthResponseDTO authentification(@RequestBody UserDTO userDTO) {
        Long returnBox = patientRepo.findByNameAndPassword(userDTO.getName(),userDTO.getPassword()).orElse(Patient.builder().idPatient((long)-1).build()).getIdPatient();
        if(returnBox != (long)-1){
            return AuthResponseDTO.builder().userId(returnBox).type("P").build();
        }
        returnBox = doctorRepo.findByNameAndPassword(userDTO.getName(),userDTO.getPassword()).orElse(Doctor.builder().idDoctor((long)-1).build()).getIdDoctor();
        if(returnBox != (long)-1){
            return AuthResponseDTO.builder().userId(returnBox).type("D").build();
        }
        returnBox = caregiverRepo.findByNameAndPassword(userDTO.getName(),userDTO.getPassword()).orElse((Caregiver.builder().idCaregiver((long)-1).build())).getIdCaregiver();
        if(returnBox != (long)-1){
            return AuthResponseDTO.builder().userId(returnBox).type("C").build();
        }
        return AuthResponseDTO.builder().type("F").userId(returnBox).build();
    }
}