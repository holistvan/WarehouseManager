import { Component, OnInit, OnDestroy } from '@angular/core';

import { Request } from '../model/request';

import { RequestService } from '../request.service';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})

export class RequestListComponent implements OnInit, OnDestroy {

  requests: Request[] = [];

  filteredRequests: Request[];
  submitted: boolean = false;

  constructor(
    private requestService: RequestService,
  ) { }

  async ngOnInit() {
    this.requests = await this.requestService.getAllRequests();
  }

  ngOnDestroy() {
  }


  filter(filterText: string) {

    this.filteredRequests = [];

    for( let request of this.requests ) {
      if( request.owner.userName.toLowerCase().includes(filterText) || 
          request.owner.userName.toUpperCase().includes(filterText) ||
          request.product.productName.toLowerCase().includes(filterText) ||
          request.product.productName.toUpperCase().includes(filterText) ) {
            this.filteredRequests.push(request);
      }
    }

    if( this.filteredRequests.length == 0 ) {
      alert("Rendszerünkben nem található a keresési feltételeknek megfelelő regisztráció.");
    } else {
      this.submitted = true;
    }  
  }
}
