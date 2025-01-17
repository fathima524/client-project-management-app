import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';  
  password: string = '';  

  constructor(private router: Router) {}


  onSubmit() {

    if (this.username && this.password) {
     
      this.router.navigate(['/dash/dashboard']);
    } else {
    
      console.error('Invalid username or password');
    }
  }
}
