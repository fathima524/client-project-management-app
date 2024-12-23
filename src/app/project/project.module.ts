import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectEditComponent,
    ProjectDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    SharedModule
   
  ]
})
export class ProjectModule { }
