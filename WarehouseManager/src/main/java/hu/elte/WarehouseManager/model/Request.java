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

    @Column(name = "PRODUCT_NAME")
    private String productName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID")
    private User owner;

    @Column(name = "QUANTITY_IN_STOCK")
    private Integer quantityInStock;
}
