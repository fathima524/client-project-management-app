import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
  { path: 'project-edit/:id', component: ProjectEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
