import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Request } from './model/request';
import { User } from './model/user';
import { Product } from './model/product';

import { REQUESTS } from './mock-requests';
import { USERS } from './mock-users';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  filteredRequests: Request[];

  constructor() { }

  getSize(): number{
    return REQUESTS.length;
  }

  getAllRequests(): Observable<Request[]> {
    return of(REQUESTS);
  }

  getRequest( filterNumber: number ): Request {
    for( let request of REQUESTS ) {
        
      if( request.request_id == filterNumber ) {
        return request;
      }
    }
  }

  getFilteredRequests( filterText: string ): Request[] {

    this.filteredRequests = [];

    for( let request of REQUESTS ) {
        
      if( request.user.user_name.toLowerCase().includes(filterText) || 
          request.user.user_name.toUpperCase().includes(filterText) ||
          request.product.product_name.toLowerCase().includes(filterText) ||
          request.product.product_name.toUpperCase().includes(filterText) ) {
          
            this.filteredRequests.push(request);
      }
    }
    
    return this.filteredRequests;
  }
}
