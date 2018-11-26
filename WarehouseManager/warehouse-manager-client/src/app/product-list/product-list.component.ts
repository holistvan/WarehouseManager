import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Request } from '../model/request';
import { Product } from '../model/product';
import { User } from '../model/user';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  requests: Request[];
  products: Product[];
  users: User[];


  filteredProducts: Product[];
  submitted: boolean = false;

  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  ngOnDestroy() {
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
  }

  filter(filterText: string) {

    this.filteredProducts = this.productService.getFilteredProducts(filterText);

    if( this.filteredProducts.length == 0 ) {
      alert("Rendszerünkben nem található a keresési feltételeknek megfelelő regisztráció.");
    } else {
      this.submitted = true;
    }   
  }
}
