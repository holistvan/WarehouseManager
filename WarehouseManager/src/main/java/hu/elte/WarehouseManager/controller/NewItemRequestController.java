package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.NewItemRequest;
import hu.elte.WarehouseManager.repository.NewItemRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/newitemrequest")
@Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class NewItemRequestController {

    @Autowired
    private NewItemRequestRepository newItemRequestRepository;

    @GetMapping("")
    public Iterable<NewItemRequest> getAll() {
        return newItemRequestRepository.findAll();
    }
}
