import { Component } from '@angular/core';
import { CalenderComponent } from '../calender/calender.component';

@Component({
  selector: 'app-appointment-page',
  imports: [CalenderComponent],
  templateUrl: './appointment-page.component.html',
  styleUrl: './appointment-page.component.scss',
})
export class AppointmentPageComponent {}
