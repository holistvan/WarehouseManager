import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Request } from './model/request';
import { User } from './model/user';
import { Product } from './model/product';
import { ProductType } from './model/producttype';
import { ProductGroup } from './model/productgroup';

import { REQUESTS } from './mock-requests';
import { USERS } from './mock-users';
import { PRODUCTS } from './mock-products';
import { PRODUCTTYPES } from './mock-producttypes';
import { PRODUCTGROUPS } from './mock-productgroups';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  filteredProducts: Product[];
  selectedProduct: Product;

  constructor() { }

  getSize(): number{
    return PRODUCTS.length;
  }

  getAllProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getFilteredProducts( filterText: string ): Product[] {

    this.filteredProducts = [];

    for( let product of PRODUCTS ) {
        
      if( product.product_name.toLowerCase().includes(filterText) || 
          product.product_name.toUpperCase().includes(filterText) ) {
          
            this.filteredProducts.push(product);
      }
    }
    
    return this.filteredProducts;
  }

  getProductById( filterNumber: number ): Product {
    for( let product of PRODUCTS ) {
        
      if( product.product_id == filterNumber ) {
        return product;
      }
    }
  }

  getProduct( filterText: string ): Product {
    
    for( let product of PRODUCTS ) {
      if( product.product_name.includes(filterText) ) {
            return product;
      }
    }
  }

  getProductType( filterText: string ): ProductType {
    
    for( let producttype of PRODUCTTYPES ) {
      if( producttype.product_type_name.includes(filterText) ) {
            return producttype;
      }
    }
  }

  getProductGroup( filterText: string ): ProductGroup {
    
    for( let productgroup of PRODUCTGROUPS ) {
      if( productgroup.product_group_name.includes(filterText) ) {
            return productgroup;
      }
    }
  }
}
