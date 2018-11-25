import { ProductGroup } from "./productgroup";

export class ProductType {
    
    // fields
    product_type_id: number;
    product_type_name: string;
    product_group: ProductGroup;

    // constructor
    constructor(
        product_type_id:number,
        product_type_name:string,
        product_group:ProductGroup) { 
            this.product_type_id = product_type_id; 
            this.product_type_name = product_type_name;
            this.product_group = product_group;
    }
}