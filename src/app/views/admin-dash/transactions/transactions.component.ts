import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  transactions: any[] = Array(8)
    .fill(null)
    .map((_, i) => ({
      report_id: '#111122',
      id: String(i + 1).padStart(6, '0'),
      patientName: 'إبراهيم الدسوقي',
      patientImage: 'pataint-1.png',
      amount: 400,
    }));
}
