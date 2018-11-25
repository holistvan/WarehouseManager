import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { PRODUCTGROUPS } from './mock-productgroups';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = PRODUCTS;
  productGroups = PRODUCTGROUPS;
  selectedProduct : Product;

  constructor() { }

  getAllProduct() : Product[] {
    return this.products;
  }

  onSelect(product: Product): Product {
    this.selectedProduct = product;
    return this.selectedProduct;
  }
}
