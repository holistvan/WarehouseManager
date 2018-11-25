import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from "../product-list/product-list.component";
import { ProductFormComponent } from '../product-form/product-form.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { RequestListComponent } from '../request-list/request-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RequestDetailComponent } from '../request-detail/request-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'requests',
    component: RequestListComponent
  },
  {
    path: 'products/new',
    component: ProductFormComponent
  },
  {
    path: 'requests/new',
    component: RequestFormComponent
  },
  {
    path: 'products/:product_id',
    component: ProductDetailComponent
  },
  {
    path: 'requests/:request_id',
    component: RequestDetailComponent
  },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
  ],
  exports: [ 
    RouterModule,
   ],
  declarations: []
})
export class RoutingModule { }
