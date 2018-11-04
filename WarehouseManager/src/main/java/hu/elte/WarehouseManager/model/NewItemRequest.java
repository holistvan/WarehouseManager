package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "NEW_ITEM_REQUESTS")
public class NewItemRequest {

    @Id
    @Column(name = "NEWITEM_ID")
    private Integer newItemRequestID;

    // @OneToOne
    // @JoinColumn(name = "PRODUCT_NAME")
    // @Column(name = "PRODUCT_NAME")
    // private Product product;

    // @OneToOne
    // @JoinColumn(name = "OWNER_ID")
    // @Column(name = "OWNER_ID")
    // private User owner;
}
