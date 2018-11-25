import { Injectable } from '@angular/core';
import { Product } from '../app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, 'Sony MDRZX330BT vezeték nélküli fejhallgató', 'TV, média lejátszó', 1, 11),
    new Product(2, 'Sbox PLB-3422T dönthető fali konzol', 'Televízió konzol', 1, 2),
    new Product(3, 'Sony Xperia XZ3', 'Mobil', 2, 33),
    new Product(4, 'Huawei MediaPad M5', 'Tablet', 2, 0),
    new Product(5, 'Asus VivoBook', 'Laptop', 3, 24),
    new Product(6, 'Zyxel Aurora 1080P felhő alapú IP kamera', 'Hálózati eszköz', 3, 1),
    new Product(7, 'Tefal Ceramic Control serpenyő', 'Edényzet', 4, 5),
    new Product(8, 'Jar Platinum mosogatógép tablett', 'Mosószer, öblítő', 4, 3),
    new Product(9, 'BaByliss elektromos hajsimító', 'Hajformázók', 5, 7),
    new Product(10, 'Oral-B D100 elektromos fogkefe', 'Elektromos fogkefe', 5, 13),
    new Product(11, 'Bosch sövényvágó', 'Sövényvágó', 6, 22),
    new Product(12, 'Black&Decker csavarozó', 'Fúró-csavarozó', 6, 100),
    new Product(13, 'Nicon Aculon távcső', 'Távcső', 7, 0),
    new Product(14, 'Canon objektív', 'Objektív', 7, 19),
    new Product(15, 'LEGO Friends Heartlake Pizzéria', 'LEGO', 8, 0),
    new Product(16, 'Daniel Klein férfi karóra', 'Karóra', 8, 5),
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  filter(filterText: string): Product[] {
    const filteredProducts = [];
    
    for (let product of this.products) {
      if (product.product_name.startsWith(filterText)) {
        filteredProducts.push(product);
      }
    }
    
    return filteredProducts;
  }
}
