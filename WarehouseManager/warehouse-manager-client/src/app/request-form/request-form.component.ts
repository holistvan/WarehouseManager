import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { Product } from '../model/product';
import { Request } from '../model/request';

import { UserService } from '../user.service';
import { ProductService } from '../product.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
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
    private requestService: RequestService,
    private userService: UserService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getAllRequests();
    this.getAllUsers();
    this.getAllProducts();
  }

  onSubmit(form) {

    this.submitted = true;
    this.user = this.userService.getUser(form.value.user);
    this.product = this.productService.getProduct(form.value.product);

    this.model = new Request( this.nextID, 
                              this.user, 
                              this.product, 
                              form.value.ordered_amount);
    
    this.requests.push(this.model);
  }

  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe(users => this.users = users);
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
  }

  getAllRequests(): void {
    this.requestService.getAllRequests()
      .subscribe(requests => this.requests = requests);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }
}
