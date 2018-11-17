import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit, OnDestroy {

  requestItems: string[] = [
    'Request1',
    'Request2',
    'Request3',
  ];

  filteredRequestItems: string[];
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  filter(filterText: string) {
    this.filteredRequestItems = [];
    for (let requestItem of this.requestItems) {

      if (requestItem.startsWith(filterText)) {

        this.filteredRequestItems.push(requestItem);

      }

    }
    this.submitted = true;
  }

}
