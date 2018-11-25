import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestFilterComponent } from './request-filter/request-filter.component';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    RequestListComponent,
    RequestFormComponent,
    RequestDetailComponent,
    RequestFilterComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
