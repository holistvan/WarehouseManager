import { Component, OnInit } from '@angular/core';

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

  users: User[];
  products: Product[];
  requests: Request[];
  productgroups: ProductGroup[];

  nextID = this.productService.getSize() + 1;

  model = new Product(this.nextID,
                      this.productService.getAllProducts()[0].product_name,
                      this.productService.getAllProducts()[0].product_type,
                      this.groupService.getAllGroups()[0],
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

  onSubmit(form) {

    this.submitted = true;

    this.productGroup = this.groupService.getGroup(form.value.productgroup);

    this.model = new Product( this.nextID,
                              form.value.product,
                              form.value.producttype,
                              this.productGroup,
                              form.value.quantity_in_stock);
    
    this.products.push(this.model);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

}
