package hu.elte.WarehouseManager.repository;

import hu.elte.WarehouseManager.resource.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
