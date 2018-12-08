import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProductGroup } from './model/productgroup';

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService {

  private groups: ProductGroup[];

  private filteredGroups: ProductGroup[];

  constructor(
    private httpClient: HttpClient
  ) { }

  requestGroups(){
    this.httpClient
      .get<ProductGroup[]>('/api/groups')
      .toPromise()
      .then(data =>
          this.groups = data);
  }

  getAllGroups(): Observable<ProductGroup[]> {
    return of(this.groups);
  }

  getGroupById(groupID: number): Observable<ProductGroup> {
    for( let group of this.groups ) {
      if( group.product_group_id == groupID ) {
        return of(group);
      }
    }
  }

  // visszaadja a termékek tömb méretét
  getSize(): number{
    return this.groups.length;
  }

  // visszaadja a szűrt termékek tömb tartalmát
  getFilteredProducts( filterText: string ): Observable<ProductGroup[]> {

    this.filteredGroups = [];

    for( let group of this.groups ) {
      if( group.product_group_name.toLowerCase().includes(filterText) || 
          group.product_group_name.toUpperCase().includes(filterText) ) {
            this.filteredGroups.push(group);
      }
    }
    
    return of(this.filteredGroups);
  }

  getGroup(filterName: string) {
    for( let group of this.groups ) {
      if( group.product_group_name.toLowerCase().includes(filterName) || 
          group.product_group_name.toUpperCase().includes(filterName) ) {
            return group;
      }
    }
  }
}
