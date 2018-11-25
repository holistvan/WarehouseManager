import { Injectable } from '@angular/core';
import { Request } from '../app/model/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requests: Request[] = [
    new Request(1, 1, 10, 7),
    new Request(2, 1, 1, 72),
    new Request(3, 2, 13, 1),
    new Request(4, 2, 16, 22),
    new Request(5, 3, 3, 3),
    new Request(6, 3, 5, 33),
  ];

  constructor() { }

  getCurrentLastID(): number {
    return this.requests.length;
  }

  getAllRequest(): Request[] {
    return this.requests;
  }

  filter(filterNumber: number): Request[] {
    const filteredRequests = [];
    
    for (let request of this.requests) {
      if (request.product_id == filterNumber) {
        filteredRequests.push(request);
      }
    }
    
    return filteredRequests;
  }
}
