export class Product {

    // fields
    product_id: number;
    product_name: string;
    product_type: string;
    product_group_id: number;
    quantity_in_stock: number;

    // constructor
    constructor(
        product_id:number,
        product_name:string,
        product_type:string,
        product_group_id:number,
        quantity_in_stock:number) { 

            this.product_id = product_id; 
            this.product_name = product_name;
            this.product_type = product_type;
            this.product_group_id = product_group_id;
            this.quantity_in_stock = quantity_in_stock;
     }
}