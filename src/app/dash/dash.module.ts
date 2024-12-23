import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashRoutingModule } from './dash-routing.module';

@NgModule({
  declarations: [
    DashboardComponent 
  ],
  imports: [
    CommonModule,      
    SharedModule,     
    DashRoutingModule  
  ]
})
export class DashModule { }
