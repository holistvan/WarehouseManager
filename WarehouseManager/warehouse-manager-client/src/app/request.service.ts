import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Request } from './model/request';
import { User } from './model/user';
import { Product } from './model/product';

@Injectable()
export class RequestService {

  requests: Request[] = [];
  users: User[] = [];
  products: Product[] = [];

  constructor(
    private httpClient: HttpClient,
  ) { }

  getSize(): number {
    return this.requests.length;
  }

  requestRequests(){
    this.httpClient
      .get<Request[]>('/api/requests')
      .toPromise()
      .then(data =>
          this.requests = data);
  }

  getAllRequests(): Promise<Request[]> {
    return this.httpClient
    .get<Request[]>('/api/requests')
    .toPromise()
    .then(data =>
        this.requests = data);

  }
  
  async getRequest(requestID: number): Promise<Request> {
    const request = await this.requests.find(
      request => request.requestID === requestID
    );

    if( request ) {
      return Promise.resolve(request);
    } else {
      return this.httpClient
        .get<Request>(`/api/requests/${requestID}`)
        .toPromise()
        .then(request => { return request });
    }
  }
}
