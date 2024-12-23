import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients = [
    { id: 1, name: 'Alice Johnson', contact: 'alice@example.com', summary: 'Regular client from NY.' },
    { id: 2, name: 'Bob Smith', contact: 'bob@example.com', summary: 'Long-term client.' },
    { id: 3, name: 'Charlie Brown', contact: 'charlie@example.com', summary: 'New client in California.' },
    { id: 4, name: 'David Green', contact: 'david@example.com', summary: 'Frequent buyer.' },
    { id: 5, name: 'Eva White', contact: 'eva@example.com', summary: 'VIP client from LA.' }
  ];
  
  filteredClients = [...this.clients]; // Holds the filtered list of clients based on search query
  searchQuery = '';
  
  newClientName = '';
  newClientContact = '';
  newClientSummary = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addClient(): void {
    if (this.newClientName && this.newClientContact && this.newClientSummary) {
      const newClient = {
        id: this.clients.length + 1,
        name: this.newClientName,
        contact: this.newClientContact,
        summary: this.newClientSummary
      };
      this.clients.push(newClient); 
      this.filteredClients.push(newClient); 
      this.clearNewClientFields(); 
      alert('Client added successfully!');
    } else {
      alert('Please fill in all fields to add a new client.');
    }
  }

  clearNewClientFields(): void {
    this.newClientName = '';
    this.newClientContact = '';
    this.newClientSummary = '';
  }

  filterClients(): void {
    if (this.searchQuery.trim()) {
      this.filteredClients = this.clients.filter(client =>
        client.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredClients = [...this.clients]; // Reset to all clients if search is empty
    }
  }

  viewClient(id: number): void {
    this.router.navigate(['/client-details', id]);
  }

  goToEdit(id: number): void {
    this.router.navigate(['/client-edit', id]);
  }

  deleteClient(id: number): void {
    this.clients = this.clients.filter(client => client.id !== id);
    this.filteredClients = this.filteredClients.filter(client => client.id !== id);
    alert('Client deleted successfully!');
  }
}
