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
@Table(name = "Doctor")
@Entity
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "idDoctor",resolver = EntityIdResolver.class, scope = Doctor.class)
public class Doctor {
    @Id
    @Column(name = "idDoctor", unique = true, nullable = false)
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idDoctor;

    @Column(name = "name")
    String name;

    @Column(name = "password")
    String password;
}
