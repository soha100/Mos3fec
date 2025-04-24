import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.scss'],
})
export class StatisticsChartComponent implements AfterViewInit {
  chart: any;
  chartRevenue: any;

  ngAfterViewInit(): void {
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [
          {
            label: 'مريض',
            data: [300, 400, 150, 200, 280, 500, 450],
            backgroundColor: '#A0DAB6',
          },
          {
            label: 'دكتور',
            data: [320, 410, 170, 250, 350, 550, 480],
            backgroundColor: '#004D29',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
              },
              color: '#004D29',
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 100,
            },
          },
        },
        // scales: {
        //   x: {
        //     grid: {
        //       display: false,
        //     },
        //   },
        //   y: {
        //     beginAtZero: false,
        //     min: 100,
        //     max: 500,
        //     ticks: {
        //       stepSize: 100,
        //     },
        //   },
        // },
      },
    });
  }
}
