package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.Request;
import hu.elte.WarehouseManager.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/requests")
@Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class RequestController {

    @Autowired
    private RequestRepository requestRepository;

    @GetMapping("")
    public Iterable<Request> getAll() {
        return requestRepository.findAll();
    }
}
