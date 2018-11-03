package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class User {

    @Id
    private Integer id;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private String role;

}
