package com.DS.back.repos;

import com.DS.back.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoctorRepo extends JpaRepository<Doctor,Long> {
    public Optional<Doctor> findByIdDoctor(Long id);
    public Optional<Doctor> findByNameAndPassword(String name, String password);
}
