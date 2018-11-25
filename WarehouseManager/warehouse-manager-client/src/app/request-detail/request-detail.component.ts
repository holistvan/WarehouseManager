import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css'],
  providers: [RequestService],
})
export class RequestDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
