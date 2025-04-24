import { Component } from '@angular/core';

@Component({
  selector: 'app-specialties',
  imports: [],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.scss',
})
export class SpecialtiesComponent {
  specialties: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      specialtie_id: '#111122',
      doctorName: 'د/محمد رمضان',
      doctorImage: 'Image.png',
      specialization: 'اسنان',
    }));
}
