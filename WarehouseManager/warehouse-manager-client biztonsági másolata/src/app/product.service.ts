import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { PRODUCTGROUPS } from './mock-productgroups';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = PRODUCTS;
  productGroups = PRODUCTGROUPS;

  constructor() { }
}
