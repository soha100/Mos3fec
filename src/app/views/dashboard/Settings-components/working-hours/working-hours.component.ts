import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-working-hours',
  imports: [CommonModule],
  templateUrl: './working-hours.component.html',
  styleUrl: './working-hours.component.scss',
})
export class WorkingHoursComponent {
  days = [
    'السبت',
    'الأحد',
    'الاثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
  ];
  selectedDays: string[] = ['الأربعاء', 'الثلاثاء', 'الأحد', 'السبت'];
  schedule: string[] = Array(7).fill('السبت');

  selectDay(day: string) {
    if (this.selectedDays.includes(day)) {
      this.selectedDays = this.selectedDays.filter((d) => d !== day);
    } else {
      this.selectedDays.push(day);
    }
  }
}
