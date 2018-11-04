package hu.elte.WarehouseManager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "USERS")
public class User {

    @Id
    @Column(name = "USER_ID")
    private Integer userID;

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name = "USER_PASSWORD")
    private String password;

    @Column(name = "USER_ROLE")
    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role {
        ROLE_GUEST, ROLE_USER, ROLE_ADMIN
    }

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "owner")
    @JsonIgnore
    private List<Request> requests;
}
