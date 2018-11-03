package hu.elte.WarehouseManager.repository;

import hu.elte.WarehouseManager.resource.Request;
import org.springframework.data.repository.CrudRepository;

public interface RequestRepository extends CrudRepository<Request, Integer> {
}
