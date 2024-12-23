import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../email.service'; // Import the email service

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = ''; 
  email: string = '';     
  password: string = '';  
  
  constructor(private router: Router, private emailService: EmailService) {} // Inject EmailService

  onSubmit() {
    if (this.username && this.email && this.password) {
      const verificationToken = this.generateVerificationToken(); // Generate token
      this.emailService.sendVerificationEmail(this.email, verificationToken)
        .subscribe(
          () => {
            console.log('Verification email sent successfully');
            alert('A verification email has been sent to your email address.');
            this.router.navigate(['/auth/login']); // Redirect to login page
          },
          (error: any) => {
            console.error('Failed to send verification email:', error);
            alert('Failed to send verification email.');
          }
        );
    } else {
      console.error('Please fill in all fields');
    }
  }

  private generateVerificationToken(): string {
    return Math.random().toString(36).substr(2); // Generate a random token
  }
}
