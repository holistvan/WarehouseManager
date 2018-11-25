import { Component } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock-products';
import { PRODUCTGROUPS } from '../mock-productgroups';
import { PRODUCTTYPES } from '../mock-producttypes';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  products = PRODUCTS;
  productGroups = PRODUCTGROUPS;
  productTypes = PRODUCTTYPES;

  nextID = this.products.length + 1;

  model = new Product(this.nextID, '', PRODUCTTYPES[0], PRODUCTGROUPS[0], 1);

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.products.push(this.model);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

}
