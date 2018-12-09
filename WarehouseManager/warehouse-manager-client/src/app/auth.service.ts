import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/User';
import { UserService } from './user.service';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  wrongCredentials = false;
  
  user: User;
  token: string;

  redirectUrl ='/products';
  users: User[] = [];

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  async login(username: string, password: string): Promise<User> {

    this.users = await this.userService.getAllUsers();

    for( let user of this.users ) {
      if( user.userName == username && user.password == password ) {
        this.wrongCredentials = false;
        try {
          this.token = btoa(`${username}:${password}`);
          httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${this.token}`);
          this.isLoggedIn = true;
          return this.user;
        }
        catch (e) {
          console.log(e);
          throw e;
        }
      } else {
        this.isLoggedIn = false;
        this.wrongCredentials = true;
      }
    }
  }

  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.isLoggedIn = false;
    this.user = null;
    this.token = null;
  }
}
