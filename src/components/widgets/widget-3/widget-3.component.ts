import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-3',
  templateUrl: './widget-3.component.html',
  styleUrls: ['./widget-3.component.scss']
})
export class Widget3Component implements OnInit{
  chartData: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.chartData = {
      series: [44, 55, 13, 43, 22],
      labels: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']
    };

    this.chartOptions = {
      chart: {
        type: 'pie',
        width: 600,
        height: 220
      },
      labels: this.chartData.labels,
      responsive: [{
        options: {

          legend: {
            position: 'bottom'
          }
        }
      }]
    };
  }
}
