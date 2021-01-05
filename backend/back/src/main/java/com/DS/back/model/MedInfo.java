package com.DS.back.model;

import com.DS.back.util.EntityIdResolver;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

import static lombok.AccessLevel.PRIVATE;

@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = PRIVATE)
@Builder
@Getter
@Setter
@Table(name = "MedInfo")
@Entity
@ToString


@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "idMedInfo", resolver = EntityIdResolver.class, scope = MedInfo.class)
public class MedInfo {
//a list of medication and intake
//intervals needed to be taken daily, and the period of the treatment.
    @Id
    @Column(name = "idMedInfo", unique = true, nullable = false)
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idMedInfo;

    @Column(name = "period")
    private Long period;

    @Column(name = "interval")
    private Long interval;

    public Patient getPatient() {
        return patient;
    }

    @ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.DETACH)
    @JoinColumn(name = "patientId")
    private Patient patient;

    //@JsonManagedReference("medInfo-medication")
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.DETACH)
    @JoinColumn(name = "medicationId")
    private Medication medication;
}
