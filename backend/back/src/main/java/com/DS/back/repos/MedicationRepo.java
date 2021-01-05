package com.DS.back.repos;

import com.DS.back.model.Medication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MedicationRepo extends JpaRepository<Medication,Long> {
    public Optional<Medication> findByIdMedication(Long id);
}
