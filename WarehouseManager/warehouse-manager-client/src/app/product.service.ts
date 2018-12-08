import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './model/product';
import { ProductGroup } from './model/productgroup';

@Injectable()
export class ProductService {

  products: Product[] = [];
  groups: ProductGroup[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {}

  // visszaadja a termékek tömb méretét
  getSize(): number{
    return this.products.length;
  }

  // lekéri a szerverről az összes terméket
  requestProducts(){
    this.httpClient
      .get<Product[]>('/api/products')
      .toPromise()
      .then(data =>
          this.products = data);
  }

  // visszaadja a termékeket tartalmazó tömböt
  getAllProducts(): Promise<Product[]> {
    return this.httpClient
    .get<Product[]>('/api/products')
    .toPromise()
    .then(data =>
        this.products = data);
  }

  async getProduct(productID: number): Promise<Product> {
    const product = await this.products.find(
      product => product.productID === productID
    );

    if( product ) {
      return Promise.resolve(product);
    } else {
      return this.httpClient
        .get<Product>(`/api/products/${productID}`)
        .toPromise()
        .then(product => { return product });
    }
  }
}
