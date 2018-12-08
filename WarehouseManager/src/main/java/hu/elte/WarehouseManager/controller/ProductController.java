package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.Product;
import hu.elte.WarehouseManager.model.ProductGroup;
import hu.elte.WarehouseManager.model.Request;
import hu.elte.WarehouseManager.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
// @Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("")
    public Iterable<Product> getAll() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> get(@PathVariable Integer id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            return ResponseEntity.ok(optionalProduct.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/requests")
    public ResponseEntity<List<Request>> getProductRequests(@PathVariable Integer id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            return ResponseEntity.ok(optionalProduct.get().getRequests());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/")
    public ResponseEntity<Product> create(@RequestBody Product product) {
        if (product.getProductID() != null && productRepository.existsById(product.getProductID())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(productRepository.save(product));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> replace(@PathVariable Integer id, @RequestBody Product product) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            product.setProductID(optionalProduct.get().getProductID());
            return ResponseEntity.ok(productRepository.save(product));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Product> modify(@PathVariable Integer id, @RequestBody Product product) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product modifiableProduct = optionalProduct.get();
            if (product.getProductName() != null) {
                modifiableProduct.setProductName((product.getProductName()));
            }
            if (product.getProductGroup() != null) {
                modifiableProduct.setProductGroup((product.getProductGroup()));
            }
            if (product.getProductType() != null) {
                modifiableProduct.setProductType((product.getProductType()));
            }
            if (product.getQuantity() != null) {
                modifiableProduct.setQuantity((product.getQuantity()));
            }
            return ResponseEntity.ok(productRepository.save(modifiableProduct));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            productRepository.delete(optionalProduct.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
