package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.Product;
import hu.elte.WarehouseManager.model.ProductGroup;
import hu.elte.WarehouseManager.model.Request;
import hu.elte.WarehouseManager.model.User;
import hu.elte.WarehouseManager.repository.ProductGroupRepository;
import hu.elte.WarehouseManager.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/groups")
// @Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class ProductGroupController {

    @Autowired
    private ProductGroupRepository productGroupRepository;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("")
    public Iterable<ProductGroup> getAll() {
        return productGroupRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductGroup> get(@PathVariable Integer id) {
        Optional<ProductGroup> optionalProductGroup = productGroupRepository.findById(id);
        if (optionalProductGroup.isPresent()) {
            return ResponseEntity.ok(optionalProductGroup.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/products")
    public ResponseEntity<List<Product>> getProducts(@PathVariable Integer id) {
        Optional<ProductGroup> optionalProductGroup = productGroupRepository.findById(id);
        if (optionalProductGroup.isPresent()) {
            return ResponseEntity.ok(optionalProductGroup.get().getProducts());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/")
    public ResponseEntity<ProductGroup> create(@RequestBody ProductGroup productGroup) {
        if (productGroup.getGroupID() != null && productGroupRepository.existsById(productGroup.getGroupID())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(productGroupRepository.save(productGroup));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<ProductGroup> optionalProductGroup = productGroupRepository.findById(id);
        if (optionalProductGroup.isPresent()) {
            productGroupRepository.delete(optionalProductGroup.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/products")
    public ResponseEntity<List<Product>> addProduct(@PathVariable Integer id, @RequestBody Product product) {
        Optional<ProductGroup> optionalProductGroup = productGroupRepository.findById(id);
        Optional<Product> optionalProduct = productRepository.findById(product.getProductID());
        if (optionalProductGroup.isPresent() && optionalProduct.isPresent()) {
            ProductGroup productGroup = optionalProductGroup.get();
            productGroup.getProducts().add(optionalProduct.get());
            productGroupRepository.save(productGroup);
            return ResponseEntity.ok(productGroup.getProducts());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{groupId}/products/{productId}")
    public ResponseEntity removeProduct(@PathVariable Integer groupId,
                                     @PathVariable Integer productId) {
        Optional<ProductGroup> optionalProductGroup = productGroupRepository.findById(groupId);
        if (optionalProductGroup.isPresent()) {
            ProductGroup productGroup = optionalProductGroup.get();
            Optional<Product> optionalProduct = productGroup.getProducts().stream()
                    .filter(product -> product.getProductID() == productId)
                    .findFirst();
            if (optionalProduct.isPresent()) {
                List<Product> filteredProducts = productGroup.getProducts().stream()
                        .filter(product -> product.getProductID() != productId)
                        .collect(Collectors.toList());
                productGroup.setProducts(filteredProducts);
                productGroupRepository.save(productGroup);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
