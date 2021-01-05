package com.DS.back.controller;

import com.DS.back.repos.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class DoctorController {
    @Autowired
    DoctorRepo doctorRepo;
}
