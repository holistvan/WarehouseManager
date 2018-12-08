package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.Request;
import hu.elte.WarehouseManager.repository.ProductRepository;
import hu.elte.WarehouseManager.repository.RequestRepository;
import hu.elte.WarehouseManager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/requests")
@Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class RequestController {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public Iterable<Request> getAll() {
        return requestRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Request> getById(@PathVariable Integer id) {
        Optional<Request> optionalRequest = requestRepository.findById(id);
        if (optionalRequest.isPresent()) {
            return ResponseEntity.ok(optionalRequest.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Request> create(@RequestBody Request request) {
        if (request.getRequestID() != null && requestRepository.existsById(request.getRequestID())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(requestRepository.save(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Request> replace(@PathVariable Integer id, @RequestBody Request request) {
        Optional<Request> optionalRequest = requestRepository.findById(id);
        if (optionalRequest.isPresent()) {
            request.setRequestID(optionalRequest.get().getRequestID());
            return ResponseEntity.ok(requestRepository.save(request));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Request> modify(@PathVariable Integer id, @RequestBody Request request) {
        Optional<Request> optionalRequest = requestRepository.findById(id);
        if (optionalRequest.isPresent()) {
            Request modifiableRequest = optionalRequest.get();
            if (request.getOrderedAmount() != null) {
                modifiableRequest.setOrderedAmount((request.getOrderedAmount()));
            }
            if (request.getProduct() != null) {
                modifiableRequest.setProduct((request.getProduct()));
            }
            return ResponseEntity.ok(requestRepository.save(modifiableRequest));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Request> optionalRequest = requestRepository.findById(id);
        if (optionalRequest.isPresent()) {
            requestRepository.delete(optionalRequest.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
