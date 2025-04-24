import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  ratings: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      doctorName: 'د/محمد رمضان',
      doctorImage: 'Image.png',
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      date: '11 مارس 2020',
      time: '08:00 مساء',
      rating: 5,
      comment: 'افضل واشطر الاطباء في مجال الاسنان وعلاجها',
    }));
}
