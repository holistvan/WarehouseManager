import { Component, OnInit } from '@angular/core';
import { Request } from '../model/request';
import { UserService } from '../user.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  users = UserService.prototype.getAllUsers();
  products = ProductService.prototype.getAllProducts();

  model : Request;

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
