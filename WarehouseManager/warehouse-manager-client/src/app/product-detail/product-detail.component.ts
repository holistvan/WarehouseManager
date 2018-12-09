import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../model/product';

import { HttpClient } from '@angular/common/http';

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
    private httpClient: HttpClient
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
  
  public async deleteProduct(productId: number) {
    const Id = parseInt(this.route.snapshot.params.id as string);
    await this.httpClient.delete<null>(
      `/api/products/${productId}`
    ).toPromise();
    await this.productService.getAllProducts();
  }
}
