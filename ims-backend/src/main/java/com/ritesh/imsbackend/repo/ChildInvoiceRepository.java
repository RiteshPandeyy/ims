package com.ritesh.imsbackend.repo;

import com.ritesh.imsbackend.domain.ChildInvoice;
import com.ritesh.imsbackend.domain.ParentInvoice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChildInvoiceRepository extends JpaRepository<ChildInvoice,Long> {
    List<ChildInvoice> findByParent(ParentInvoice parent);
}
