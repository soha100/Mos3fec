import { Component } from '@angular/core';
import { StatisticsChartComponent } from '../statistics-chart/statistics-chart.component';
import { RevenueChartComponent } from '../revenue-chart/revenue-chart.component';

@Component({
  selector: 'app-admin-main-page',
  imports: [StatisticsChartComponent, RevenueChartComponent],
  templateUrl: './admin-main-page.component.html',
  styleUrl: './admin-main-page.component.scss',
})
export class AdminMainPageComponent {
  ratings: any[] = Array(4)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      doctorName: 'د/محمد رمضان',
      doctorImage: 'Image.png',
      specialization: 'اسنان',
      amount: 400,
      rating: 5,
    }));

  patients: any[] = Array(4)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',

      phone: '011111111',
      date: '11 مارس 08:00',
      time: 'حجز',
      amount: 400,
    }));

  appointments: any[] = Array(4)
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
