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
@Table(name = "SideEffect")
@Entity
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "idSideEffect",resolver = EntityIdResolver.class, scope = SideEffect.class)
public class SideEffect {
    @Id
    @Column(name = "idSideEffect", unique = true, nullable = false)
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idSideEffect;

    @Column(name = "name")
    private String name;

    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.REFRESH, CascadeType.PERSIST,CascadeType.MERGE})
    @JoinTable(
            name = "Medication_SideEffect",
            inverseJoinColumns = {@JoinColumn(name = "medicationId")},
            joinColumns ={@JoinColumn(name = "sideEffectId")}
    )
    private List<Medication> medications;
    }
