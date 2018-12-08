import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../model/user';
import { UserService } from '../user.service';

import { Product } from '../model/product';
import { ProductService } from '../product.service';

import { Request } from '../model/request';
import { RequestService } from '../request.service';

import { ProductGroup } from '../model/productgroup';
import { ProductgroupService } from '../productgroup.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})

export class ProductFormComponent implements OnInit {

  productGroup: ProductGroup;
  product: Product;

  users: User[] = [];
  products: Product[] = [];
  requests: Request[] = [];
  groups: ProductGroup[] = [];

  nextID: number;
  model: Product;
  submitted = false;

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private productService: ProductService,
    private groupService: ProductgroupService,
  ) { }

  async ngOnInit() {
    this.products = await this.productService.getAllProducts();
    this.users = await this.userService.getAllUsers();
    this.groups = await this.groupService.getAllGroups();
    this.requests = await this.requestService.getAllRequests();

    this.model = new Product(this.nextID,
      "",
      "",
      this.groups[0],
      1);
  }

  async onSubmit(form: NgForm) {

    this.submitted = true;

    console.log("onSubmit(form)");
    this.productGroup = await this.groupService.getGroup(form.value.productGroup);

    this.nextID = this.productService.getSize() + 1;

    this.model = new Product( this.nextID,
                              form.value.productName,
                              form.value.productType,
                              this.productGroup,
                              form.value.quantity);
    
    await this.productService.addProduct(this.model);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

}
