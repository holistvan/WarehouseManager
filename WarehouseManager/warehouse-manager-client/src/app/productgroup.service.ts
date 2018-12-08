import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProductGroup } from './model/productgroup';

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService {

  groups: ProductGroup[];

  filteredGroups: ProductGroup[];

  constructor(
    private httpClient: HttpClient,
  ) { }

  requestGroups(){
    this.httpClient
      .get<ProductGroup[]>('/api/groups')
      .toPromise()
      .then(data =>
          this.groups = data);
  }

  getAllGroups(): Promise<ProductGroup[]> {
    return this.httpClient
    .get<ProductGroup[]>('/api/groups')
    .toPromise()
    .then(data =>
        this.groups = data);
  }

  async getGroup(groupID: number): Promise<ProductGroup> {
    const group = await this.groups.find(
      group => group.groupID === groupID
    );

    if( group ) {
      return Promise.resolve(group);
    } else {
      return this.httpClient
        .get<ProductGroup>(`/api/groups/${groupID}`)
        .toPromise()
        .then(group => { return group });
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
      if( group.groupName.toLowerCase().includes(filterText) || 
          group.groupName.toUpperCase().includes(filterText) ) {
            this.filteredGroups.push(group);
      }
    }
    
    return of(this.filteredGroups);
  }
}
