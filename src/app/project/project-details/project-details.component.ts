import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectId!: number; 
  project: any; 
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchProjectDetails();
  }

  fetchProjectDetails(): void {
    const projects = [
      { id: 1, name: "Project 1", deadline: "20/12/24", summary: "Summary of Project 1", additional_details: "Additional Details" },
      { id: 2, name: "Project 2", deadline: "22/12/24", summary: "Summary of Project 2", additional_details: "More Details" },
      { id: 3, name: "Project 3", deadline: "25/12/24", summary: "Summary of Project 3", additional_details: "Extra Details" }
    ];

    this.project = projects.find(project => project.id === this.projectId);
    if (!this.project) {
      console.error('Project not found!');
    }
  }

  goToEdit(): void {
    this.router.navigate(['/project-edit', this.projectId]);
  }
}
