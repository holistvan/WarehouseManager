import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestService } from '../request.service';
import { REQUESTS } from '../mock-requests';
import { Request } from '../model/request';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
  providers: [RequestService],
})
export class RequestListComponent implements OnInit, OnDestroy {

  requests = REQUESTS;
  products = PRODUCTS;

  filteredRequests: Request[];
  submitted: boolean = false;

  constructor(
    private requestService: RequestService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  filter(filterText: string) {

    this.filteredRequests = [];

    if( filterText == '' ) {

      alert("Kérem adjon meg keresési feltételt");

    } else {

      for (let request of this.requests) {
        if ( request.request_id == parseInt(filterText) ) {
          this.filteredRequests.push(request);
        }
      }

      if (this.filteredRequests.length == 0) {
        alert("Rendszerünkben nem található a keresési feltételeknek megfelelő igény");
      } else {
        this.submitted = true;
      }
    }
  }
}
