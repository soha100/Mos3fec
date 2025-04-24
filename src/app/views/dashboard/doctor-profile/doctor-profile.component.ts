import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../shared/services/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  imports: [],
  templateUrl: './doctor-profile.component.html',
  styleUrl: './doctor-profile.component.scss',
})
export class DoctorProfileComponent implements OnInit {
  doctorData: any;
  constructor(private _DoctorService: DoctorService) {}
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
}
