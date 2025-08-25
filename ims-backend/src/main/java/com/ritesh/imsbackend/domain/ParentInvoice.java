package com.ritesh.imsbackend.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity @Table(name="parent_invoices")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ParentInvoice {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String code;

    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "parent",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<ChildInvoice> children;


}
