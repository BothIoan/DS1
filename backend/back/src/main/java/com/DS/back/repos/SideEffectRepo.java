package com.DS.back.repos;

import com.DS.back.model.SideEffect;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SideEffectRepo extends JpaRepository<SideEffect,Long>{
    public Optional<SideEffect> findByIdSideEffect(Long id);

}
