import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../model/request';

@Component({
  selector: 'request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css'],
  providers: [RequestService],
})

export class RequestDetailComponent implements OnInit {

  request_id: number;
  request: Request;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {

    this.request_id = await this.route.snapshot.params.request_id;
    this.request = await this.requestService.getRequest(this.request_id);
  }
}
