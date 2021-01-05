package com.DS.back.repos;

import com.DS.back.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Nullable;

import java.util.List;
import java.util.Optional;

public interface PatientRepo extends JpaRepository<Patient,Long> {
    public List<Patient> findByCaregiver_idCaregiverNot(Long caregiver_id);
    public List<Patient> findByCaregiver_idCaregiver(@Nullable Long caregiver_id);
    public Optional<Patient> findByIdPatient(Long id);
    public Optional<Patient> findByNameAndPassword(String name, String password);
}
