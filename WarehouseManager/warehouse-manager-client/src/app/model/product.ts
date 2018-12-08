import { ProductGroup } from '../model/productgroup';

export class Product {

    // fields
    productID: number;
    productName: string;
    productType: string;
    productGroup: ProductGroup;
    quantity: number;

    // constructor
    constructor(
        productID:number,
        productName:string,
        productType:string,
        productGroup:ProductGroup,
        quantity:number) { 

            this.productID = productID; 
            this.productName = productName;
            this.productType = productType;
            this.productGroup = productGroup;
            this.quantity = quantity;
    }
}