package hu.elte.WarehouseManager;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoderGenerator {

    public static void main(String[] args) {

       String password = "Alma123";
       BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
       String hashedPassword = passwordEncoder.encode(password);
       System.out.println(hashedPassword);
    }
}
