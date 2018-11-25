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

  filteredProducts: Product[];
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  filter(filterText: string) {

    this.filteredProducts = [];

    if( filterText == '' ) {

      alert("Kérem adjon meg keresési feltételt");

    } else {

      for (let product of this.products) {
        if ( product.product_name.toLowerCase().includes(filterText) || product.product_name.includes(filterText) ) {
          this.filteredProducts.push(product);
        }
      }

      if (this.filteredProducts.length == 0) {
        alert("Rendszerünkben nem található a keresési feltételeknek megfelelő termék");
      } else {
        this.submitted = true;
      }
    }    
  }
}
