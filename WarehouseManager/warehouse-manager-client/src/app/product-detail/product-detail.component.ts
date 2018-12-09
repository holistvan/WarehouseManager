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
  productID: number;
  product: Product;
  productName: string;
  productType: string;
  groupName: string;
  quantity: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.product_id = await this.route.snapshot.params.product_id;
    this.product = await this.productService.getProduct(this.product_id);

    this.productID = this.product.productID;
    this.productName = this.product.productName;
    this.productType = this.product.productType;
    this.groupName = this.product.productGroup.groupName;
    this.quantity = this.product.quantity;
  }
}
