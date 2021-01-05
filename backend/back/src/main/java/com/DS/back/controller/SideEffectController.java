package com.DS.back.controller;

import com.DS.back.model.SideEffect;
import com.DS.back.repos.SideEffectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class SideEffectController {
    @Autowired
    SideEffectRepo sideEffectRepo;

    @GetMapping("sideEffects/r")
    public List<SideEffect> getSideEffects(){
        return sideEffectRepo.findAll();
    }

    @DeleteMapping("sideEffects/d/{id}")
    public ResponseEntity<?> deleteSideEffect(@PathVariable(value = "id")Long id){
        sideEffectRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    @PostMapping("sideEffects/cu")
    public SideEffect createSideEffect(@RequestBody SideEffect sideEffect){
        return sideEffectRepo.save(sideEffect);
    }

    @GetMapping("sideEffect/r/{id}")
    public SideEffect getSideEffectId(@PathVariable(value = "id")Long id){
        return sideEffectRepo.findByIdSideEffect(id).orElse(SideEffect.builder().idSideEffect((long)-1).build());
    }
}
