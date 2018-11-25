import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { RequestListComponent } from './request-list/request-list.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestFilterComponent } from './request-filter/request-filter.component';
import { RequestService } from './request.service';
import { ProductService } from './product.service';
import { ProductgroupService } from './productgroup.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    RequestFormComponent,
    RequestFilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    RequestService,
    ProductService,
    ProductgroupService,
    UserService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
