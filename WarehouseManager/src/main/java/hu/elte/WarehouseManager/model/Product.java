package hu.elte.WarehouseManager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column(name = "PRODUCT_NAME")
    private String productName;

    @Column(name = "PRODUCT_TYPE")
    private String productType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PRODUCT_GROUP_ID")
    private ProductGroup productGroup;

    @Column(name = "QUANTITY_IN_STOCK")
    private Integer quantity;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "product")
    @JsonIgnore
    private List<Request> requests;
}
