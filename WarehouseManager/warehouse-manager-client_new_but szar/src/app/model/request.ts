export class Request {
    
    // fields
    request_id: number;
    user_id: number;
    product_id: number;
    ordered_amount: number;

    // constructor
    constructor(
        request_id:number,
        user_id:number,
        product_id:number,
        ordered_amount:number) { 

            this.request_id = request_id; 
            this.user_id = user_id;
            this.product_id = product_id;
            this.ordered_amount = ordered_amount;
    }
}
