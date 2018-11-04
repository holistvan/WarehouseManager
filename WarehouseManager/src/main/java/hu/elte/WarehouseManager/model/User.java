package hu.elte.WarehouseManager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
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

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "USERNAME")
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "ROLE")
    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role {
        ROLE_GUEST, ROLE_USER, ROLE_ADMIN
    }

    // @OneToMany(mappedBy = "owner")
    // @JsonIgnore
    // private List<Request> requests;

    // @OneToOne(mappedBy = "owner")
    // @JsonIgnore
    // private NewItemRequest newItemRequest;
}
