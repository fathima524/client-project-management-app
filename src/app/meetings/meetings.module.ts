import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetingCalendarComponent } from './meeting-calender/meeting-calendar.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { MeetingsRoutingModule } from './meetings-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MeetingCalendarComponent,
    MeetingDetailsComponent,
    MeetingListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MeetingsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    MeetingCalendarComponent,
    MeetingDetailsComponent,
    MeetingListComponent,
  ],
  providers:[DatePipe]
})
export class MeetingsModule { }
