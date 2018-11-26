import { Component, OnInit, OnDestroy } from '@angular/core';

import { RequestService } from '../request.service';
import { Request } from '../model/request';
import { Product } from '../model/product';
import { User } from '../model/user';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})
export class RequestListComponent implements OnInit, OnDestroy {

  requests: Request[];
  products: Product[];
  users: User[];

  filteredRequests: Request[];
  submitted: boolean = false;

  constructor(
    private requestService: RequestService,
  ) { }

  ngOnInit() {
    this.getAllRequests();
  }

  ngOnDestroy() {
  }

  getAllRequests(): void {
    this.requestService.getAllRequests()
      .subscribe(requests => this.requests = requests);
  }

  filter(filterText: string) {
    this.filteredRequests = this.requestService.getFilteredRequests(filterText);

    if( this.filteredRequests.length == 0 ) {
      alert("Rendszerünkben nem található a keresési feltételeknek megfelelő regisztráció.");
    } else {
      this.submitted = true;
    }  
  }
}
