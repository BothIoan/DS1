package com.DS.back.repos;

import com.DS.back.model.MedInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Nullable;

import java.util.List;
import java.util.Optional;

public interface MedInfoRepo extends JpaRepository<MedInfo,Long> {
    public List<MedInfo> findByPatient_idPatient(@Nullable Long patient_id);
    public Optional<MedInfo> findByIdMedInfo(Long id);
}
