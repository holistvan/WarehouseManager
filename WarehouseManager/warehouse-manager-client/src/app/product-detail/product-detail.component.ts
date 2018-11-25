import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  selectedProduct : Product;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
  }
}
