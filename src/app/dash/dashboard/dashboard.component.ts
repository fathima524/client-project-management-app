import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Declare the properties
  totalClients: number = 0;  // Example: You can replace 0 with the actual value
  activeProjects: number = 0; // Example: Replace with the actual count of active projects
  upcomingMeetings: number = 0; // Example: Replace with the actual count of upcoming meetings

  constructor() { }

  ngOnInit(): void {
    // Here you can fetch or set the actual values for these properties
    // For now, we set them statically as examples.
    this.totalClients = 100; // Set this dynamically if needed
    this.activeProjects = 50; // Set this dynamically if needed
    this.upcomingMeetings = 10; // Set this dynamically if needed
  }
}
