import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../model/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService],
})
export class ProductDetailComponent implements OnInit {

  product_id: number;
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.product_id = this.route.snapshot.params.product_id;
    this.product = this.productService.getProductById(this.product_id);
  }
}
