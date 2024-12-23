import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clientId!: number;
  client: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id')); // Get the client ID from the route
    this.fetchClientDetails();
  }

  fetchClientDetails(): void {
    // Simulate fetching client data (replace with actual API call if needed)
    const clients = [
      { id: 1, name: 'Alice Johnson', contact: 'alice@example.com', summary: 'Regular client from NY.', additionalDetails: 'Some more details here.' },
      { id: 2, name: 'Bob Smith', contact: 'bob@example.com', summary: 'Long-term client.', additionalDetails: 'Some more details here.' },
      { id: 3, name: 'Charlie Brown', contact: 'charlie@example.com', summary: 'New client in California.', additionalDetails: 'Some more details here.' },
      { id: 4, name: 'David Green', contact: 'david@example.com', summary: 'Frequent buyer.', additionalDetails: 'Some more details here.' },
      { id: 5, name: 'Eva White', contact: 'eva@example.com', summary: 'VIP client from LA.', additionalDetails: 'Some more details here.' }
    ];

    this.client = clients.find(client => client.id === this.clientId); // Fetch client data based on ID
  }

  goToEdit(): void {
    this.router.navigate(['/client-edit', this.clientId]); // Navigate to the client edit page
  }
}
