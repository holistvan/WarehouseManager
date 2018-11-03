package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.User;
import hu.elte.WarehouseManager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public Iterable<User> getAll() {
        return userRepository.findAll();
    }
}
