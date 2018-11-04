package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "PRODUCTS")
public class Product {

    @Id
    @Column(name = "PRODUCT_ID")
    private Integer productID;

    @Column(name = "NAME")
    private String name;

    @Column(name = "TYPE")
    private String type;

    // @ManyToOne
    // @JoinColumn(name="GROUP_ID")
    // @Column(name = "GROUP_ID")
    // private ProductGroup productGroup;

    @Column(name = "QUANTITY_IN_STOCK")
    private Integer quantityInStock;

    // @OneToOne(mappedBy = "product")
    // private Request newRequest;

    // @OneToMany(mappedBy = "product")
    // private List<Request> requests;
}
