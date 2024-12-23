import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  meetings = [
    // Example meetings data
    {
      id: 1,
      title: 'Team Sync',
      date: new Date('2024-12-25T10:00:00'),
      duration: 60,
      status: 'Scheduled',
      participants: ['Alice', 'Bob']
    },
    {
      id: 2,
      title: 'Project Planning',
      date: new Date('2024-12-26T14:00:00'),
      duration: 120,
      status: 'Completed',
      participants: ['Charlie', 'Dave', 'Eve']
    }
    // Add more meetings as needed
  ];

  newMeeting = {
    title: '',
    date: new Date(),
    duration: 60,
    status: 'Scheduled',
    participants: []
  };

  showForm = false;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  addMeeting(): void {
    this.showForm = true;
  }

  saveMeeting(): void {
    // Validate form inputs
    if (this.newMeeting.title && this.newMeeting.date) {
      const newMeeting = {
        id: this.meetings.length + 1, // Increment ID
        ...this.newMeeting
      };

      this.meetings.push(newMeeting);
      this.newMeeting = { title: '', date: new Date(), duration: 60, status: 'Scheduled', participants: [] };
      this.showForm = false; // Hide form after adding
    }
  }

  cancelMeeting(meetingId?: number): void {
    if (meetingId !== undefined) {
      this.meetings = this.meetings.filter(meeting => meeting.id !== meetingId);
      console.log(`Cancelled meeting with ID: ${meetingId}`);
    } else {
      this.showForm = false; // Hide form without saving
    }
  }

  viewDetails(meetingId: number): void {
    console.log(`View details for meeting ID: ${meetingId}`);
    // Implement navigation or modal for meeting details
  }

  editMeeting(meetingId: number): void {
    console.log(`Edit meeting with ID: ${meetingId}`);
    // Implement navigation or modal for editing a meeting
  }
}
