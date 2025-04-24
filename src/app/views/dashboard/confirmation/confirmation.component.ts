import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  confirmationRequests: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      date: '11 مارس 08:00',
      time: 'حجز',
      type: 'مكالمة فيديو',
    }));
}
