import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../mock-users';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock-products';
import { Request } from '../model/request';
import { REQUESTS } from '../mock-requests';

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  users = USERS;
  products = PRODUCTS;
  requests = REQUESTS;

  nextID = this.requests.length + 1;

  model = new Request(this.nextID, USERS[0], PRODUCTS[0], 1);

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.requests.push(this.model);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

}
