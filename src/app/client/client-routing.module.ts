import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

const routes: Routes = [
  { path: 'client-list', component: ClientListComponent },
  { path: 'client-details/:id', component: ClientDetailsComponent },
  { path: 'client-edit/:id', component: ClientEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
