import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingCalendarComponent } from './meeting-calender/meeting-calendar.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';

const routes: Routes = [
  {path:'meeting-calender',component:MeetingCalendarComponent},
  {path:'meeting-details',component:MeetingDetailsComponent},
  {path:'meeting-list',component:MeetingListComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
