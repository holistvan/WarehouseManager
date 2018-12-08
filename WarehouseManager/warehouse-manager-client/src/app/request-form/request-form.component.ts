import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { UserService } from '../user.service';

import { Product } from '../model/product';
import { ProductService } from '../product.service';

import { Request } from '../model/request';
import { RequestService } from '../request.service';

import { ProductgroupService } from '../productgroup.service';

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})

export class RequestFormComponent implements OnInit {

  user: User;
  product: Product;

  users: User[];
  products: Product[];
  requests: Request[];

  nextID = this.requestService.getSize() + 1;

  model = new Request(this.nextID,
                      this.userService.getAllUsers()[0],
                      this.productService.getAllProducts[0],
                      1);

  submitted = false;

  constructor(
    public requestService: RequestService,
    public userService: UserService,
    public productService: ProductService,
    public groupService: ProductgroupService,
  ) { }

  ngOnInit() {
    this.requestService.requestRequests();
    this.userService.requestUsers();
    this.productService.requestProducts();
    this.groupService.requestGroups();
  }

  async onSubmit(form) {

    this.submitted = true;
    this.user = this.userService.getUser(form.value.user);
    this.product = await this.productService.getProduct(form.value.product);

    this.model = new Request( this.nextID, 
                              this.user, 
                              this.product, 
                              form.value.ordered_amount);
    
    this.requests.push(this.model);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }
}
