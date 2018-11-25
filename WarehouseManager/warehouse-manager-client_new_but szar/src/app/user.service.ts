import { Injectable } from '@angular/core';
import { User } from '../app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User(1, 'holistvan', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN'),
    new User(2, 'dikomako', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN'),
    new User(3, 'testuser', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_USER'),
  ];

  constructor() { }

  getAllUsers(): User[] {
    return this.users;
  }

  filter(filterText: string): User[] {
    const filteredUsers = [];
    
    for (let userItem of this.users) {
      if (userItem.user_name.startsWith(filterText)) {
        filteredUsers.push(userItem);
      }
    }
    
    return filteredUsers;
  }
}
