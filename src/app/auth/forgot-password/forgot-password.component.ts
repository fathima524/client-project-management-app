import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';  

  constructor(private router: Router) {}


  onSubmit() {
    if (this.email) {
      console.log('Password reset link sent to:', this.email);

     
      this.router.navigate(['/auth/login']);
    } else {
      console.error('Please enter your email');
    }
  }
}
