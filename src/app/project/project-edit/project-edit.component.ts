import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  projectId!: number;
  project: any; // Make sure this is initialized

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchProjectDetails();
  }

  fetchProjectDetails(): void {
    // Mock project data
    const projects = [
      { id: 1, name: 'project 1', deadline: '15th December', summary: 'Summary of project 1' },
      { id: 2, name: 'project 2', deadline: '16th December', summary: 'Summary of project 2' },
      { id: 3, name: 'project 3', deadline: '17th December', summary: 'Summary of project 3' },
    ];
    this.project = projects.find(project => project.id === this.projectId);
  }

  onSubmit(): void {
    console.log('Updated Project:', this.project);
    alert('Project Details updated successfully');
    this.router.navigate(['./project-list']);
  }
}
