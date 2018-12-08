import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from './model/user';

@Injectable()
export class UserService {

  users: User[];
  filteredUsers: User[];

  constructor(
    private httpClient: HttpClient,
  ) { }

  requestUsers(){
    this.httpClient
      .get<User[]>('/api/users')
      .toPromise()
      .then(data =>
          this.users = data);
  }

  getAllUsers(): Promise<User[]> {
    return this.httpClient
    .get<User[]>('/api/users')
    .toPromise()
    .then(data =>
        this.users = data);
  }

  async getUser(userID: number): Promise<User> {
    const user = await this.users.find(
      user => user.userID === userID
    );

    if( user ) {
      return Promise.resolve(user);
    } else {
      return this.httpClient
        .get<User>(`/api/users/${userID}`)
        .toPromise()
        .then(user => { return user });
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
}
