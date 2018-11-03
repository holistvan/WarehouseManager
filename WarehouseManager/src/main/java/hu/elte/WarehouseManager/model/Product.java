package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Product {

    @Id
    private String productname;

    @Column
    private String type;

    @Column
    private Integer group_id;

    @Column
    private Integer quantity;



}
