import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-widget-3',
  templateUrl: './widget-3.component.html',
  styleUrls: ['./widget-3.component.scss']
})
export class Widget3Component implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const options = {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      series: [70],
      labels: ['Progress'],
    };

    const chart = new ApexCharts(this.elementRef.nativeElement.querySelector('#chart'), options);
    chart.render();
  }
}
