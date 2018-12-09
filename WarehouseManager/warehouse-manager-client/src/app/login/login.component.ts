import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  message: string;
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {

    this.username = form.value.username;
    this.password = form.value.password;

    try {
      await this.authService.login(this.username, this.password);
      console.log(this.authService.redirectUrl);
      if (this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
    }
    catch(e) {
      this.message = 'Cannot log in!'
    }
  }

}