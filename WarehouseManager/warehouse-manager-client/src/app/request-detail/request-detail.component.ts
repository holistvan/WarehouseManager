import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../model/request';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css'],
  providers: [RequestService],
})

export class RequestDetailComponent implements OnInit {

  request_id: number;
  request: Request;

  requestID: number;
  userID: number;
  userName: string;
  productID: number;
  productName: string;
  productType: string;
  groupName: string;
  orderedAmount: number;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  async ngOnInit() {

    this.request_id = await this.route.snapshot.params.request_id;
    this.request = await this.requestService.getRequest(this.request_id);

    this.requestID = this.request.requestID;
    this.userID = this.request.owner.userID;
    this.userName = this.request.owner.userName;
    this.productID = this.request.product.productID;
    this.productName = this.request.product.productName;
    this.productType = this.request.product.productType;
    this.groupName = this.request.product.productGroup.groupName;
    this.orderedAmount = this.request.orderedAmount;
  }
  public async deleteRequest(requestId: number) {
    await this.httpClient.delete<null>(
      `/api/requests/${requestId}`
    ).toPromise();
    await this.requestService.getAllRequests;
  }
}
