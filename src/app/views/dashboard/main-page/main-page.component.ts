import { Component, OnInit } from '@angular/core';

import { ChartComponent } from '../chart/chart.component';
import { CalenderComponent } from '../calender/calender.component';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../../shared/services/doctor.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, ChartComponent, CalenderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  doctorData: any;
  constructor(
    private _DoctorService: DoctorService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this._DoctorService.getDoctorProfile().subscribe({
      next: (data) => {
        this.doctorData = data;
      },
      error: (error) => {
        console.error('Error fetching doctor profile', error);
      },
    });
  }
  get doctorFullName(): string {
    return this.doctorData
      ? `${this.doctorData.firstName} ${this.doctorData.lastName}`
      : '...';
  }

  bookings = [
    {
      date: '2025 مارس 17',
      name: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      id: '#00tp123',
      time: '08:30 Am',
    },
    {
      date: '2025 مارس 17',
      name: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      id: '#00tp123',
      time: 'Am 08:30',
    },
    {
      date: '2025 مارس 17',
      name: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      id: '#00tp123',
      time: '08:30 Am',
    },
    {
      date: '2025 مارس 17',
      name: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      id: '#00tp123',
      time: '08:30 Am',
    },
  ];
  patients = [
    {
      name: 'إبراهيم الدسوقي',
      id: '#00p123',
      lastBooking: '12 مارس 2023',
      image: 'patient.png',
    },
    {
      name: 'إبراهيم الدسوقي',
      id: '#00p123',
      lastBooking: '12 مارس 2023',
      image: 'patient.png',
    },
    {
      name: 'إبراهيم الدسوقي',
      id: '#00p123',
      lastBooking: '12 مارس 2023',
      image: 'patient.png',
    },
  ];
  clinics = [
    {
      price: 400,
      doctor: 'د/ محمد رمضان',
      location: 'المنصورة شارع الجلاء',
      image: 'clinc1.png',
      schedule: [
        { day: 'الأحد', time: '05:00 مساء - 10:00 مساء' },
        { day: 'الإثنين', time: '05:00 مساء - 10:00 مساء' },
      ],
    },
    {
      price: 400,
      doctor: 'د/ محمد رمضان',
      location: 'المنصورة شارع المشاية',
      image: 'clinc1.png',
      schedule: [
        { day: 'الثلاثاء', time: '05:00 مساء - 10:00 مساء' },
        { day: 'الأربعاء', time: '05:00 مساء - 10:00 مساء' },
      ],
    },
  ];

  recentInvoices: any[] = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      date: '17 مايو 2025',
      amount: 400,
    }));
}
