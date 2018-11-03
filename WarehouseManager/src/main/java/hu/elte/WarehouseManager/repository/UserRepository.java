package hu.elte.WarehouseManager.repository;

import hu.elte.WarehouseManager.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
}
