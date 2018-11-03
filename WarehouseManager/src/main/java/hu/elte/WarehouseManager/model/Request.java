package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Request {

    @Id
    private Integer id;

    @Column
    private Integer owner;

    @Column
    private String productname;

    @Column
    private Integer quantity;
}
