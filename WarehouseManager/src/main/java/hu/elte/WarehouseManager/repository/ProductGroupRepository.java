package hu.elte.WarehouseManager.repository;

import hu.elte.WarehouseManager.model.ProductGroup;
import org.springframework.data.repository.CrudRepository;

public interface ProductGroupRepository extends CrudRepository<ProductGroup, Integer> {
}
