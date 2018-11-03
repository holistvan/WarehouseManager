package hu.elte.WarehouseManager.repository;

import hu.elte.WarehouseManager.model.NewItemRequest;
import org.springframework.data.repository.CrudRepository;

public interface NewItemRequestRepository extends CrudRepository<NewItemRequest, Integer> {
}
