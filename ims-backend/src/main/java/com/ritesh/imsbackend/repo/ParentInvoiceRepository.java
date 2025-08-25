package com.ritesh.imsbackend.repo;

import com.ritesh.imsbackend.domain.ParentInvoice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParentInvoiceRepository extends JpaRepository<ParentInvoice,Long> {
    Optional<ParentInvoice> findByCode(String code);
}
