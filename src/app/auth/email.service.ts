import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendVerificationEmail(email: string, token: string): Observable<any> {
    const verificationLink = `http://localhost:3000/api/send-email?token=${token}`; // Use your local backend URL
    const emailPayload = {
      to: email, // Use the provided email
      subject: 'Email Verification',
      body: `Click this link to verify your email: ${verificationLink}`
    };

    return this.http.post('http://localhost:3000/api/send-email', emailPayload); // Use your backend URL
  }
}
