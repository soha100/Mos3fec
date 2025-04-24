import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments-list',
  imports: [],
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.scss',
})
export class AppointmentsListComponent {
  appointments: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      doctorName: 'د/محمد رمضان',
      doctorImage: 'Image.png',
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      date: '11 مارس 08:00',
      time: 'حجز',
      specialization: 'اسنان',
      status: true,
      amount: 400,
    }));
}
