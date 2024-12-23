import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
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
      { id: 1, name: 'Alice Johnson', contact: 'alice@example.com', summary: 'Regular client from NY.' },
      { id: 2, name: 'Bob Smith', contact: 'bob@example.com', summary: 'Long-term client.' },
      { id: 3, name: 'Charlie Brown', contact: 'charlie@example.com', summary: 'New client in California.' },
      { id: 4, name: 'David Green', contact: 'david@example.com', summary: 'Frequent buyer.' },
      { id: 5, name: 'Eva White', contact: 'eva@example.com', summary: 'VIP client from LA.' }
    ];

    this.client = clients.find(client => client.id === this.clientId); // Fetch client data based on ID
  }

  onSubmit(): void {
    // Handle form submission logic here (e.g., save client data)
    console.log('Updated Client:', this.client);
    alert('Client details updated successfully!');
    this.router.navigate(['/client-list']); // Navigate back to client list after saving
  }
}
