import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/User';

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
  
  user: User;
  token: string;

  redirectUrl ='/products';

  constructor(
    private http: HttpClient,
  ) { }

  async login(username: string, password: string): Promise<User> {
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
  }

  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.isLoggedIn = false;
    this.user = null;
    this.token = null;
  }
}
