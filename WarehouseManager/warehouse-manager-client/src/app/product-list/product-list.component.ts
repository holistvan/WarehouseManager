import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { PRODUCTS } from '../mock-products';
import { Product } from '../model/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {

  products = PRODUCTS;
  selectedProduct : Product;

  filteredProducts: Product[];
  submitted: boolean = false;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  filter(filterText: string) {

    this.filteredProducts = [];

    for(let product of this.products) {
        
      if( product.product_name.toLowerCase().includes(filterText) || product.product_name.includes(filterText) ) {
          this.filteredProducts.push(product);
      }
    }

    if (this.filteredProducts.length == 0) {
      alert("Rendszerünkben nem található a keresési feltételeknek megfelelő termék.");
    } else {
      this.submitted = true;
    }    
  }
}
