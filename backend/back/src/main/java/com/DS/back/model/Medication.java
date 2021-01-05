package com.DS.back.model;

import com.DS.back.util.EntityIdResolver;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.List;

import static lombok.AccessLevel.PRIVATE;

@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = PRIVATE)
@Builder
@Getter
@Setter
@Table(name = "Medication")
@Entity
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "idMedication",resolver = EntityIdResolver.class, scope = Medication.class)
public class Medication {
//(defined by ID, name, list of side effects, dosage)
    @Id
    @Column(name = "idMedication", unique = true, nullable = false)
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idMedication;

    @Column(name = "name")
    private String name;


    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.REFRESH})
    @JoinTable(
            name = "Medication_SideEffect",
            joinColumns = {@JoinColumn(name = "medicationId")},
            inverseJoinColumns ={@JoinColumn(name = "sideEffectId")}
    )
    private List<SideEffect> sideEffects ; //nu stiu daca tre sau nu new arrayList
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "medication",orphanRemoval = true)
    private List<MedInfo> medInfos;

    @Column(name = "dosage")
    private Long dosage;
}
