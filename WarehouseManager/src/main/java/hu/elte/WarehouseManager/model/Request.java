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
    @JoinColumn(name = "USER_ID")
    private User owner;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PRODUCT_NAME")
    private Product product;

    @Column(name = "ORDERED_AMOUNT")
    private Integer orderedAmount;
}
