import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { Product } from '../model/product';
import { Request } from '../model/request';
import { ProductType } from '../model/producttype';
import { ProductGroup } from '../model/productgroup';

import { UserService } from '../user.service';
import { ProductService } from '../product.service';
import { RequestService } from '../request.service';
import { ProducttypeService } from '../producttype.service';
import { ProductgroupService } from '../productgroup.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productType: ProductType;
  productGroup: ProductGroup;
  product: Product;

  users: User[];
  products: Product[];
  requests: Request[];
  producttypes: ProductType[];
  productgroups: ProductGroup[];

  nextID = this.productService.getSize() + 1;

  model = new Product(this.nextID,
                      this.productService.getAllProducts()[0],
                      this.productTypeService.getAllProductTypes()[0],
                      this.productGroupService.getAllProductGroups()[0],
                      1);

  submitted = false;

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private productService: ProductService,
    private productTypeService: ProducttypeService,
    private productGroupService: ProductgroupService,
  ) { }

  ngOnInit() {
    this.getAllRequests();
    this.getAllUsers();
    this.getAllProducts();
    this.getAllProductGroups();
    this.getAllProductTypes();
  }

  onSubmit(form) {

    this.submitted = true;

    this.productType = this.productService.getProductType(form.value.producttype);
    this.productGroup = this.productService.getProductGroup(form.value.productgroup);

    this.model = new Product( this.nextID,
                              form.value.product,
                              this.productType,
                              this.productGroup,
                              form.value.quantity_in_stock);
    
    this.products.push(this.model);
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

  getAllProductTypes(): void {
    this.productTypeService.getAllProductTypes()
      .subscribe(producttypes => this.producttypes = producttypes);
  }

  getAllProductGroups(): void {
    this.productGroupService.getAllProductGroups()
      .subscribe(productgroups => this.productgroups = productgroups);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

}
