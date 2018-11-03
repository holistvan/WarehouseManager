package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.Product;
import hu.elte.WarehouseManager.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
@Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("")
    public Iterable<Product> getAll() {
        return productRepository.findAll();
    }
}
