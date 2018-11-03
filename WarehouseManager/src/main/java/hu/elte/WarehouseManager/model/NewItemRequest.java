package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class NewItemRequest {

    @Id
    private Integer id;

    @Column
    private String productname;

    @Column
    private Integer owner;
}
