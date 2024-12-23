import { Component, OnInit } from '@angular/core';

interface Meeting {
  id: number;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  clientName: string;
  projectName: string;
  attendees: string[];
  status: 'scheduled' | 'completed' | 'cancelled';
  description?: string;
}

@Component({
  selector: 'app-meeting-calendar',
  templateUrl: './meeting-calendar.component.html',
  styleUrls: ['./meeting-calendar.component.css']
})
export class MeetingCalendarComponent implements OnInit {
  meetings: Meeting[] = [];
  selectedDate: Date = new Date();
  calendarDays: Date[] = [];
  currentMonth: Date = new Date();
  showAddMeetingForm = false;
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Sample data - replace with actual API call
  sampleMeetings: Meeting[] = [
    {
      id: 1,
      title: 'Project Kickoff',
      date: new Date(),
      startTime: '10:00',
      endTime: '11:00',
      clientName: 'Acme Corp',
      projectName: 'Website Redesign',
      attendees: ['John Doe', 'Jane Smith'],
      status: 'scheduled',
      description: 'Initial project meeting'
    },
    {
      id: 2,
      title: 'Sprint Planning',
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      startTime: '14:00',
      endTime: '15:30',
      clientName: 'Tech Corp',
      projectName: 'Mobile App',
      attendees: ['Alice Johnson', 'Bob Wilson'],
      status: 'scheduled',
      description: 'Sprint planning session'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.meetings = this.sampleMeetings;
    this.generateCalendarDays();
  }

  generateCalendarDays() {
    this.calendarDays = [];
    const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    
    // Add previous month's days
    const firstDayOfWeek = firstDay.getDay();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(firstDay);
      day.setDate(day.getDate() - i);
      this.calendarDays.push(day);
    }
    
    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const day = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), i);
      this.calendarDays.push(day);
    }
  }

  getMeetingsForDay(date: Date): Meeting[] {
    return this.meetings.filter(meeting => 
      this.isSameDay(new Date(meeting.date), date)
    );
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  nextMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1
    );
    this.generateCalendarDays();
  }

  previousMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1
    );
    this.generateCalendarDays();
  }

  isToday(date: Date): boolean {
    return this.isSameDay(date, new Date());
  }

  selectDate(date: Date) {
    this.selectedDate = date;
  }

  toggleAddMeetingForm() {
    this.showAddMeetingForm = !this.showAddMeetingForm;
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { 
      month: 'long',
      year: 'numeric'
    });
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentMonth.getMonth();
  }

  addMeeting(meetingData: Partial<Meeting>) {
    const newMeeting: Meeting = {
      id: this.meetings.length + 1,
      ...meetingData,
      date: this.selectedDate,
      status: 'scheduled',
      attendees: meetingData.attendees || []
    } as Meeting;

    this.meetings.push(newMeeting);
    this.showAddMeetingForm = false;
  }
}