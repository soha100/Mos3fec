import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-revenue-chart',
  imports: [],
  templateUrl: './revenue-chart.component.html',
  styleUrl: './revenue-chart.component.scss',
})
export class RevenueChartComponent implements AfterViewInit {
  chartRevenue: any;

  ngAfterViewInit(): void {
    this.chartRevenue = new Chart('RevenueChart', {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [
          {
            label: 'الإيرادات',
            data: [320, 410, 120, 200, 300, 600, 500],
            backgroundColor: '#004D29',
            barPercentage: 0.5,
            categoryPercentage: 0.6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            min: 100,
            max: 600,
            ticks: {
              stepSize: 100,
            },
          },
        },
      },
    });
  }
}
