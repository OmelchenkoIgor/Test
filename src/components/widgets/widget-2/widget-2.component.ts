import {AfterViewInit, Component, ElementRef} from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-widget-2',
  templateUrl: './widget-2.component.html',
  styleUrls: ['./widget-2.component.scss']
})
export class Widget2Component implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const options = {
      chart: {
        height: 220,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: "Series 1",
          data: [45, 52, 38, 45, 19, 23, 2]
        }
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan"
        ]
      }
    };

    const chart = new ApexCharts(this.elementRef.nativeElement.querySelector('#chart'), options);
    chart.render();
  }
}
