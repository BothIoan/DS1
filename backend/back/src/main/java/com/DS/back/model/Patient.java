package com.DS.back.model;

import com.DS.back.model.enums.Genders;
import com.DS.back.util.EntityIdResolver;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

import static lombok.AccessLevel.PRIVATE;

@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = PRIVATE)
@Builder
@Getter
@Setter
@Table(name = "Patient")
@Entity
@ToString



@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "idPatient",resolver = EntityIdResolver.class, scope = Patient.class)
public class Patient {

    @Id
    @Column(name = "idPatient", unique = true, nullable = false)
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idPatient;

    @Column(name = "name")
    private String name;

    @Temporal(TemporalType.DATE)
    @Column(name ="date")
    private Date date;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "gender",columnDefinition = "smallint")
    private Genders gender;

    @Column (name = "address")
    private String address;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "patient", orphanRemoval = true,cascade = {CascadeType.ALL})
    private List<MedInfo> medInfos;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "caregiver_id")
    private Caregiver caregiver;

    @Column(name = "password")
    private String password;
    
    @Column(name = "record")
    private String record;
}
