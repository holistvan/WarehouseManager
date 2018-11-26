import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Request } from './model/request';
import { User } from './model/user';
import { Product } from './model/product';

import { REQUESTS } from './mock-requests';
import { USERS } from './mock-users';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  filteredUsers: User[];

  constructor() { }

  getAllUsers(): Observable<User[]> {
    return of(USERS);
  }

  getFilteredUsers( filterText: string ): User[] {

    this.filteredUsers = [];

    for( let user of USERS ) {
        
      if( user.user_name.toLowerCase().includes(filterText) || 
          user.user_name.toUpperCase().includes(filterText) ) {
          
            this.filteredUsers.push(user);
      }
    }
    
    return this.filteredUsers;
  }

  getUser( filterText: string ): User {
    for( let user of USERS ) {
        
      if( user.user_name.toLowerCase().includes(filterText) || 
          user.user_name.toUpperCase().includes(filterText) ) {
          
            return user;
      }
    }
  }
}
