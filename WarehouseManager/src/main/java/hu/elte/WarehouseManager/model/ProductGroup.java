package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "PRODUCT_GROUPS")
public class ProductGroup {

    @Id
    @Column(name = "GROUP_ID")
    private Integer productGroupID;

    @Column(name = "NAME")
    private String name;

    // @OneToMany(mappedBy = "productGroup")
    // private List<Product> products;
}
