import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss',
})
export class ReportComponent {
  reports: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      report_id: '#111122',
      id: String(i + 1).padStart(6, '0'),
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      amount: 400,
      date: '11 مارس 2020',
      time: '08:00 مساء',
    }));
}
