import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductGroup } from './model/productgroup';
import { PRODUCTGROUPS } from './mock-productgroups';

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService {

  constructor() { }

  getAllProductGroups(): Observable<ProductGroup[]> {
    return of(PRODUCTGROUPS);
  }

  getProductGroup( filterText: string ): ProductGroup {
    
    for( let productgroup of PRODUCTGROUPS ) {
      if( productgroup.product_group_name.includes(filterText) || 
          productgroup.product_group_name.includes(filterText) ) {
            return productgroup;
      }
    }
  }
}
