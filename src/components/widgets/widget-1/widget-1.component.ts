import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-1',
  templateUrl: './widget-1.component.html',
  styleUrls: ['./widget-1.component.scss']
})
export class Widget1Component  implements OnInit{
  chartData: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.chartData = {
      series: [
        {
          name: "Sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }
      ],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    };

    this.chartOptions = {
      series: this.chartData.series,
      chart: {
        type: 'line',
        height: 300
      },
      xaxis: {
        categories: this.chartData.categories
      }
    };
  }
}
