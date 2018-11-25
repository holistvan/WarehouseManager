import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestListComponent } from "../request-list/request-list.component";
import { RequestFormComponent } from '../request-form/request-form.component';
// import { IssueDetailComponent } from '../issue-detail/issue-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'requests',
    component: RequestListComponent
  },
  {
    path: 'requests/new',
    component: RequestFormComponent
  },
  /*
  {
    path: 'issues/:id',
    component: IssueDetailComponent
  },*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }