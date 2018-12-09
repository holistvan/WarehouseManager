package hu.elte.WarehouseManager.controller;

import hu.elte.WarehouseManager.model.Request;
import hu.elte.WarehouseManager.model.User;
import hu.elte.WarehouseManager.repository.RequestRepository;
import hu.elte.WarehouseManager.repository.UserRepository;
import hu.elte.WarehouseManager.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
@Secured({ "ROLE_USER", "ROLE_ADMIN"})
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @GetMapping("")
    public Iterable<User> getAll() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable Integer id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(optionalUser.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("login")
    public ResponseEntity<User> login() {
        return ResponseEntity.ok(authenticatedUser.getUser());
    }

    @GetMapping("/{id}/requests")
    public ResponseEntity<List<Request>> getUserRequests(@PathVariable Integer id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(optionalUser.get().getRequests());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("")
    public ResponseEntity<User> create(@RequestBody User user) {
        Optional<User> optionalUser = userRepository.findByUserName(user.getUserName());
        if (optionalUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(User.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("/{id}/requests")
    public ResponseEntity<List<Request>> addRequest(@PathVariable Integer id, @RequestBody Request request) {
        Optional<User> optionalUser = userRepository.findById(id);
        Optional<Request> optionalRequest = requestRepository.findById(request.getRequestID());
        if (optionalUser.isPresent() && optionalRequest.isPresent()) {
            User user = optionalUser.get();
            user.getRequests().add(optionalRequest.get());
            userRepository.save(user);
            return ResponseEntity.ok(user.getRequests());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{userId}/requests/{requestId}")
    public ResponseEntity removeRequest(@PathVariable Integer userId,
                                        @PathVariable Integer requestId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            Optional<Request> optionalRequest = user.getRequests().stream()
                    .filter(request -> request.getRequestID() == requestId)
                    .findFirst();
            if (optionalRequest.isPresent()) {
                List<Request> filteredRequests = user.getRequests().stream()
                        .filter(request -> request.getRequestID() != requestId)
                        .collect(Collectors.toList());
                user.setRequests(filteredRequests);
                userRepository.save(user);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
