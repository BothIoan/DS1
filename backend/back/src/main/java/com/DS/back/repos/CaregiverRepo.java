package com.DS.back.repos;

import com.DS.back.model.Caregiver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CaregiverRepo extends JpaRepository<Caregiver,Long> {
    public Optional<Caregiver> findByIdCaregiver(Long id);
    public Optional<Caregiver> findByNameAndPassword(String name, String password);
}
