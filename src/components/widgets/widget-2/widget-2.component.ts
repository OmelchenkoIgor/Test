import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-2',
  templateUrl: './widget-2.component.html',
  styleUrls: ['./widget-2.component.scss']
})
export class Widget2Component implements OnInit{
  @Input() chartData: any;
  chartOptions: any;
  constructor() {
  }

  ngOnInit(): void {
    this.chartData = {
      series: [
        {
          name: "Expenses",
          data: [150, 200, 180, 250, 210, 280, 300, 270, 350]
        }
      ],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
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
