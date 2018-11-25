import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestService } from '../request.service';
import { REQUESTS } from '../mock-requests';
import { Request } from '../model/request';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock-products';
import { User } from '../model/user';
import { USERS } from '../mock-users';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
  providers: [RequestService],
})
export class RequestListComponent implements OnInit, OnDestroy {

  requests = REQUESTS;
  products = PRODUCTS;
  users = USERS;

  filteredRequests: Request[];
  submitted: boolean = false;

  constructor(
    private requestService: RequestService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getAllRequests(): Request[] {
    return this.requests;
  }

  filter(filterText: string) {

    this.filteredRequests = [];

    for(let request of this.requests) {
        
      if( request.user.user_name.toLowerCase().includes(filterText) || 
          request.user.user_name.toUpperCase().includes(filterText) ||
          request.product.product_name.toLowerCase().includes(filterText) ||
          request.product.product_name.toUpperCase().includes(filterText) ) {
          this.filteredRequests.push(request);
      }
    }

    if (this.filteredRequests.length == 0) {
      alert("Rendszerünkben nem található a keresési feltételeknek megfelelő regisztráció.");
    } else {
      this.submitted = true;
    }    
  }
}
