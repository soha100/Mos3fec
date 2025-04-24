import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  imports: [],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {
  patients: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      age: 30,
      address: 'المنصورة مركز اجا',
      phone: '011111111',
      date: '11 مارس 08:00',
      time: 'حجز',
      amount: 400,
    }));
}
