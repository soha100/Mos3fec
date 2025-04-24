import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-invoices',
  imports: [],
  templateUrl: './recent-invoices.component.html',
  styleUrl: './recent-invoices.component.scss',
})
export class RecentInvoicesComponent {
  recentInvoices: any[] = Array(7)
    .fill(null)
    .map((_, i) => ({
      id: String(i + 1).padStart(6, '0'),
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      date: '17 مايو 2025',
      amount: 400,
    }));
}
