import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from './model/user';

@Injectable()
export class UserService {

  private users: User[];
  private filteredUsers: User[];

  constructor(
    private httpClient: HttpClient
  ) { }

  requestUsers(){
    this.httpClient
      .get<User[]>('/api/users')
      .toPromise()
      .then(data =>
          this.users = data);
  }

  getAllUsers(): Observable<User[]> {
    return of(this.users);
  }  

  getUserById(userID: number): Observable<User> {
    for( let user of this.users ) {
      if( user.userID == userID ) {
        return of(user);
      }
    }
  }

  getSize(): number{
    return this.users.length;
  }

  getFilteredUsers(filterText: string): Observable<User[]> {

    this.filteredUsers = [];

    for(let user of this.users) {
      if( user.userName.toLowerCase().includes(filterText) || 
          user.userName.toUpperCase().includes(filterText) ) {
            this.filteredUsers.push(user);
      }
    }
    
    return of(this.filteredUsers);
  }

  getUser(filterName: string): User {
    for(let user of this.users) {
      if( user.userName.toLowerCase().includes(filterName) || 
          user.userName.toUpperCase().includes(filterName) ) {
            return user;
      }
    }
  }
}
