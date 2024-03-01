import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-5',
  templateUrl: './widget-5.component.html',
  styleUrls: ['./widget-5.component.scss']
})
export class Widget5Component implements OnInit{
  chartData: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.chartData = {
      series: [
        {
          name: 'Income',
          data: [400, 500, 300, -200, -500, 100, -300, 400]
        }
      ],
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    };

    this.chartOptions = {
      series: this.chartData.series,
      chart: {
        type: 'bar',
        height: 220
      },
      xaxis: {
        categories: this.chartData.categories
      }
    };
  }
}
