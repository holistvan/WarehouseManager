import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { ProductListComponent } from "../product-list/product-list.component";
import { ProductFormComponent } from '../product-form/product-form.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { RequestListComponent } from '../request-list/request-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RequestDetailComponent } from '../request-detail/request-detail.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'requests',
    component: RequestListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'requests/new',
    component: RequestFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/:product_id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'requests/:request_id',
    component: RequestDetailComponent,
    canActivate: [AuthGuard],
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
