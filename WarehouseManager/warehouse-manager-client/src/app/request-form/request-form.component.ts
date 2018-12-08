import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../model/user';
import { UserService } from '../user.service';

import { Product } from '../model/product';
import { ProductService } from '../product.service';

import { Request } from '../model/request';
import { RequestService } from '../request.service';

import { ProductgroupService } from '../productgroup.service';
import { ProductGroup } from '../model/productgroup';

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})

export class RequestFormComponent implements OnInit {

  user: User;
  product: Product;

  users: User[] = [];
  products: Product[] = [];
  requests: Request[] = [];
  groups: ProductGroup[] = [];

  nextID: number;
  model: Request;
  submitted = false;

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private productService: ProductService,
    private groupService: ProductgroupService,
  ) { }

  async ngOnInit() {
    this.requests = await this.requestService.getAllRequests();
    this.products = await this.productService.getAllProducts();
    this.groups = await this.groupService.getAllGroups();
    this.users = await this.userService.getAllUsers();
  
    this.model = new Request(this.nextID,
      this.users[0],
      this.products[0],
      1);
  }

  async onSubmit(form: NgForm) {

    this.submitted = true;
    this.user = await this.userService.getUser(form.value.user);
    this.product = await this.productService.getProduct(form.value.product);
    this.nextID = this.requestService.getSize() + 1;

    this.model = new Request( this.nextID, 
                              this.user, 
                              this.product, 
                              form.value.orderedAmount);
    
    this.requests.push(this.model);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }
}
