package hu.elte.WarehouseManager.repository;

import hu.elte.WarehouseManager.model.Request;
import org.springframework.data.repository.CrudRepository;

public interface RequestRepository extends CrudRepository<Request, Integer> {
}
