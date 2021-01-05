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
@Table(name = "Caregiver")
@Entity
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "idCaregiver",resolver = EntityIdResolver.class, scope = Caregiver.class)
public class Caregiver {

    @Id
    @Column(name = "idCaregiver", unique = true, nullable = false)
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idCaregiver;

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

    //@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "caregiver")
    private List<Patient> patients;

    @Column(name = "password")
    String password;
}
