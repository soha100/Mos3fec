import { Component } from '@angular/core';

@Component({
  selector: 'app-join-requests',
  imports: [],
  templateUrl: './join-requests.component.html',
  styleUrl: './join-requests.component.scss',
})
export class JoinRequestsComponent {
  requests: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      doctorName: 'د/محمد رمضان',
      doctorImage: 'Image.png',
      specialization: 'اسنان',
      amount: 400,
      date: '11 مارس 2020',
      time: '08:00 مساء',
    }));
}
