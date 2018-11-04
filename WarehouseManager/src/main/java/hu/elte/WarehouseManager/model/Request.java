package hu.elte.WarehouseManager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "REQUEST")
public class Request {

    @Id
    @Column(name = "REQUEST_ID")
    private Integer requestID;

    // @ManyToOne
    // @JoinColumn(name="OWNER_ID")
    // @Column(name = "OWNER_ID")
    // private User owner;

    // @ManyToOne
    // @JoinColumn(name="PRODUCT_NAME")
    // @Column(name = "PRODUCT_NAME")
    // private Product product;

    @Column(name = "ORDERED_AMOUNT")
    private Integer orderedAmount;

    /*
    @Enumerated(EnumType.STRING)
    private RequestStatus status;

    public enum RequestStatus {
        NEW, IN_PROGRESS, COMPLETED
    }*/
}
