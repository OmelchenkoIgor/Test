import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-4',
  templateUrl: './widget-4.component.html',
  styleUrls: ['./widget-4.component.scss']
})
export class Widget4Component implements OnInit{
  chartData: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {

    this.chartData = {
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 60, 70]
        },
        {
          name: 'Series 2',
          data: [20, 30, 40, 80, 50, 70]
        },
        {
          name: 'Series 3',
          data: [44, 76, 78, 13, 43, 22]
        }
      ],
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']
    };

    this.chartOptions = {
      series: this.chartData.series,
      chart: {
        type: 'radar',
        height: 300
      },
      xaxis: {
        categories: this.chartData.categories
      }
    };
  }
}
