package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.ProductGroup;
import hu.elte.WarehouseManager.repository.ProductGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/groups")
@Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class ProductGroupController {

    @Autowired
    private ProductGroupRepository productGroupRepository;

    @GetMapping("")
    public Iterable<ProductGroup> getAll() {
        return productGroupRepository.findAll();
    }
}
