package hu.elte.WarehouseManager.repository;

import hu.elte.WarehouseManager.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
