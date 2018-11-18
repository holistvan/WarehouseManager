import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { PRODUCTTYPES } from '../product-type';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  products = PRODUCTS;
  productTypes = PRODUCTTYPES;

  productId = 6;
  productName: string = '';
  productType: string = '';
  productGroup: number = 0;
  quantityInStock: number = 1;
  
  newProduct: Product;
  
  // @Output()
  // addSubmit: EventEmitter<Product> = new EventEmitter();

  // @Input()
  // productName: string;
  // productType: string;

  constructor() { }

  ngOnInit() {
  }

  addNewProduct() {
    this.newProduct = new Product(
                          this.productId, 
                          this.productName, 
                          this.productType, 
                          this.productGroup, 
                          this.quantityInStock);
    
    this.products.push(this.newProduct);
  }

}
