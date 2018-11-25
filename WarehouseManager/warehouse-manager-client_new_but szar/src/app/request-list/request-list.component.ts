import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
  providers: [RequestService],
})
export class RequestListComponent implements OnInit {

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
  }

}
