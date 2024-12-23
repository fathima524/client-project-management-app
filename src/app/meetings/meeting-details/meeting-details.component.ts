
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-meeting-details',
    templateUrl: './meeting-details.component.html',
    styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent implements OnInit {
    meeting: any = {
        id: '1',
        title: 'Team Standup',
        date: new Date('2024-12-23T10:00:00'),
        duration: 30,
        description: 'Daily team sync-up meeting',
        status: 'Scheduled',
        participants: ['john@example.com', 'jane@example.com']
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        console.log('Meeting ID:', id);
    }

   

    cancelMeeting(): void {
        if (this.meeting && confirm('Are you sure you want to cancel this meeting?')) {
            this.meeting.status = 'Cancelled';
            setTimeout(() => {
                this.router.navigate(['/meetings/meeting-list']);
            }, 1000);
        }
    }

    goBack(): void {
        this.router.navigate(['/meetings/meeting-list']);
    }
}