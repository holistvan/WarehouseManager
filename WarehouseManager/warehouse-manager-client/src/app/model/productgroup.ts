export class ProductGroup {
    
    // fields
    product_group_id: number;
    product_group_name: string;

    // constructor
    constructor(
        product_group_id:number,
        product_group_name:string) { 
            this.product_group_id = product_group_id; 
            this.product_group_name = product_group_name;
    }
}