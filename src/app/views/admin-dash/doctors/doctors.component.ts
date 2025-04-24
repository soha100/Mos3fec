import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  imports: [],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss',
})
export class DoctorsComponent {
  doctors: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      doctorName: 'د/محمد رمضان',
      doctorImage: 'Image.png',
      date: '11 مارس 08:00',
      specialization: 'اسنان',
      status: true,
      amount: 400,
    }));
}
