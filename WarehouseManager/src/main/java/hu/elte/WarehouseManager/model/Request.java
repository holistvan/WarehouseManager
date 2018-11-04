package hu.elte.WarehouseManager.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "REQUESTS")
public class Request {

    @Id
    @Column(name = "REQUEST_ID")
    private Integer requestID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "OWNER_ID")
    private User owner;

    @Column(name = "PRODUCT_NAME")
    private String productName;

    @Column(name = "QUANTITY_IN_STOCK")
    private Integer quantityInStock;
}
