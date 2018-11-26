import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductType } from './model/producttype';
import { PRODUCTTYPES } from './mock-producttypes';

@Injectable({
  providedIn: 'root'
})
export class ProducttypeService {

  constructor() { }

  getAllProductTypes(): Observable<ProductType[]> {
    return of(PRODUCTTYPES);
  }

  getProduct( filterText: string ): ProductType {
    
    for( let producttype of PRODUCTTYPES ) {
      if( producttype.product_type_name.includes(filterText) || 
          producttype.product_type_name.includes(filterText) ) {
            return producttype;
      }
    }
  }
}
