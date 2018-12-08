import { User } from '../model/user';
import { Product } from '../model/product';

export class Request {

    // fields
    requestID: number;
    owner: User;
    product: Product;
    orderedAmount: number;

    // constructor
    constructor(
        requestID:number,
        owner:User,
        product:Product,
        orderedAmount:number) { 

            this.requestID = requestID; 
            this.owner = owner;
            this.product = product;
            this.orderedAmount = orderedAmount;
     }
}