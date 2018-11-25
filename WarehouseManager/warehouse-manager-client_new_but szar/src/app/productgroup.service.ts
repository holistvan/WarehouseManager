import { Injectable } from '@angular/core';
import { ProductGroup } from '../app/model/productgroup';

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService {

  private productGroups: ProductGroup[] = [
    new ProductGroup(1, 'TV, audió, konzol & Gamer'),
    new ProductGroup(2, 'Mobil, tablet, eBook & okosóra'),
    new ProductGroup(3, 'Laptop, monitor, nyomtatás & IT'),
    new ProductGroup(4, 'Háztartás, konyha & Lámpa'),
    new ProductGroup(5, 'Szépségápolás & Drogéria'),
    new ProductGroup(6, 'Barkács, szerszám & Kert'),
    new ProductGroup(7, 'Fotó, drón, videó & Optika'),
    new ProductGroup(8, 'LEGO, játék, bútor & sport'),
  ];

  constructor() { }

  getAllProductGroups() {
    return this.productGroups;
  }

  filter(filterText: string): ProductGroup[] {
    const filteredProductGroups = [];
    
    for (let productGroup of this.productGroups) {
      if (productGroup.product_group_name.startsWith(filterText)) {
        filteredProductGroups.push(productGroup);
      }
    }
    
    return filteredProductGroups;
  }
}
