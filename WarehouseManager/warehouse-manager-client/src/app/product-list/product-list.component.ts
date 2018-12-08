import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from '../model/user';
import { Request } from '../model/request';
import { Product } from '../model/product';

import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[];

  filteredProducts: Product[] = [];
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
  ) { }

  async ngOnInit() {
    this.products = await this.productService.getAllProducts();
  }

  ngOnDestroy() {
  }

  filter(filterText: string) {

    this.filteredProducts = [];

    for( let product of this.products ) {
      if( product.productName.toLowerCase().includes(filterText) ||
          product.productName.toUpperCase().includes(filterText) ) {
            this.filteredProducts.push(product);
      }
    }

    if( this.filteredProducts.length == 0 ) {
      alert("Rendszerünkben nem található a keresési feltételeknek megfelelő regisztráció.");
    } else {
      this.submitted = true;
    } 
  }
}
