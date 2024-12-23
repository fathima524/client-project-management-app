import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dash',
    loadChildren: () => import('./dash/dash.module').then(m => m.DashModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'meetings',
    loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule)
  },
  {
    path:'shared',
    loadChildren:() => import('./shared/shared.module').then(m=>m.SharedModule)
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login as default
  { path: '**', redirectTo: 'login' } // Redirect for all undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
