package com.ritesh.imsbackend.domain;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity @Table(name = "child_invoices")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ChildInvoice {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "parent_id")
    private ParentInvoice parent;

    @Column(nullable = false)
    private String filename;

    private String storagePath;
    private BigDecimal amount;
    private LocalDateTime uploadedAt;
}
