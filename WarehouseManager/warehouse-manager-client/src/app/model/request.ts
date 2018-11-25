import { User } from '../model/user';
import { Product } from '../model/product';

export class Request {

    // fields
    request_id: number;
    user: User;
    product: Product;
    ordered_amount: number;

    // constructor
    constructor(
        request_id:number,
        user:User,
        product:Product,
        ordered_amount:number) { 

            this.request_id = request_id; 
            this.user = user;
            this.product = product;
            this.ordered_amount = ordered_amount;
     }
}