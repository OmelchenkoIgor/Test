import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public options: any;
  public items: any[];

  public openDrawer = false;

  constructor() {
    this.options = {
      // Опції конфігурації сітки
      gridType: 'fit',
      pushItems: true,
      margin: 10,
      maxCols: 2,
      outerMargin: true,
      displayGrid: 'always',
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
    };

    // Створення елементів сітки
    this.items = [
      { id: 'block1', cols: 2, rows: 1, y: 0, x: 0 }, // Блок 1
      { id: 'block2', cols: 1, rows: 1, y: 1, x: 0 }, // Блок 2
      { id: 'block3', cols: 1, rows: 1, y: 1, x: 1 }, // Блок 3
      { id: 'block4', cols: 1, rows: 1, y: 2, x: 0 }, // Блок 4
      { id: 'block5', cols: 1, rows: 1, y: 2, x: 1 }, // Блок 5
    ];
  }

  public onItemChange(event: any) {
    console.log('Item changed:', event);
  }

  public open(): void {
    this.openDrawer = true;
  }

  public close(): void {
    this.openDrawer = false;
  }
}
