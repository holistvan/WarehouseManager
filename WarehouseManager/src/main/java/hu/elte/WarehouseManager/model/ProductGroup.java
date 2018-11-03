package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class ProductGroup {

    @Id
    private Integer id;

    @Column
    private String groupname;
}
