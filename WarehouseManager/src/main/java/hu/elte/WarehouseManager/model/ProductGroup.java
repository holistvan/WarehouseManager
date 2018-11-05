package hu.elte.WarehouseManager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "PRODUCT_GROUPS")
public class ProductGroup {

    @Id
    @Column(name = "PRODUCT_GROUP_ID")
    private Integer groupID;

    @Column(name = "PRODUCT_GROUP_NAME")
    private String groupName;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "productGroup")
    @JsonIgnore
    private List<Product> products;
}
