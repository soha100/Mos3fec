import { Component } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  public config: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: [
        'jan',
        'feb',
        'Mar',
        'April',
        // 'may',
        // 'jun',
        // 'july',
        // 'agu',
        // 'oct',
      ],
      datasets: [
        {
          label: '',
          data: [65, 69, 80, 81, 56, 65, 75],
          fill: false,
          borderColor: '#016239',
          tension: 0.4,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      aspectRatio: 1,
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
          min: 0,
          max: 100,
          ticks: {
            stepSize: 10,
          },
        },
      },
    },
  };
  chart: any;

  ngOnInit(): void {
    this.chart = new Chart('Mychart', this.config);
  }
}
