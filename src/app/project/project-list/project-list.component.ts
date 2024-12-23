import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = [
    { id: 1, name: 'Project 1', deadline: '10th December', summary: 'Project 1 Summary' },
    { id: 2, name: 'Project 2', deadline: '12th December', summary: 'Project 2 Summary' },
    { id: 3, name: 'Project 3', deadline: '15th December', summary: 'Project 3 Summary' },
  ];

  searchQuery = '';
  filteredProjects = [...this.projects]; // Initially show all projects
  newProjectName = '';
  newProjectDeadline = '';
  newProjectSummary = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Method to filter projects based on search query
  filterProjects(): void {
    this.filteredProjects = this.projects.filter(project =>
      project.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Call this method whenever the search query changes
  onSearchChange(): void {
    this.filterProjects();
  }

  addProject(): void {
    if (this.newProjectName && this.newProjectDeadline && this.newProjectSummary) {
      const newProject = {
        id: this.projects.length + 1,
        name: this.newProjectName,
        deadline: this.newProjectDeadline,
        summary: this.newProjectSummary,
      };
      this.projects.push(newProject);
      this.filteredProjects.push(newProject);
      this.clearNewProjectFields();
      alert('Project added successfully!');
    } else {
      alert('Please fill all the fields to add a new project.');
    }
  }

  clearNewProjectFields(): void {
    this.newProjectName = '';
    this.newProjectDeadline = '';
    this.newProjectSummary = '';
  }

  viewProject(id: number): void {
    this.router.navigate(['/project-details', id]);
  }

  editProject(id: number): void {
    this.router.navigate(['/project-edit', id]);
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter(project => project.id !== id);
    this.filteredProjects = this.filteredProjects.filter(project => project.id !== id);
    alert('Project deleted successfully.');
  }
}
