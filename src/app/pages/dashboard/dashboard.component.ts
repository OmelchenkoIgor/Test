import {Component, ViewChild} from '@angular/core';
import {NzContextMenuService, NzDropdownMenuComponent} from "ng-zorro-antd/dropdown";
import {GridsterItem} from "angular-gridster2";
import {Widget1Component} from "../../../components/widgets/widget-1/widget-1.component";
import {Widget2Component} from "../../../components/widgets/widget-2/widget-2.component";
import {Widget3Component} from "../../../components/widgets/widget-3/widget-3.component";
import {Widget4Component} from "../../../components/widgets/widget-4/widget-4.component";
import {Widget5Component} from "../../../components/widgets/widget-5/widget-5.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('menu') menu: NzDropdownMenuComponent;

  public options: any;
  public items: any[];
  public selectedWidget: any;

  public openDrawer = false;

  constructor(private nzContextMenuService: NzContextMenuService) {
    this.options = {
      // Опції конфігурації сітки
      gridType: 'verticalFixed',
      pushItems: true,
      margin: 10,
      maxCols: 4,
      outerMargin: true,
      displayGrid: 'none',
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: false
      },
      emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
    };

    // Створення елементів сітки
    this.items = [
      { id: 'block1', component: 'app-widget-1', cols: 2, rows: 1, y: 0, x: 0 }, // Блок 1
      { id: 'block2', component: 'app-widget-2', cols: 1, rows: 1, y: 1, x: 0 }, // Блок 2
      { id: 'block3', component: 'app-widget-3', cols: 1, rows: 1, y: 1, x: 1 }, // Блок 3
      { id: 'block4', component: 'app-widget-4', cols: 1, rows: 1, y: 2, x: 0 }, // Блок 4
      { id: 'block5', component: 'app-widget-5', cols: 1, rows: 1, y: 2, x: 1 }, // Блок 5
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

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
  emptyCellClick(event: MouseEvent, item: GridsterItem): void {
    console.info('empty cell click', event, item);
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent, item: any): void {
    this.nzContextMenuService.create($event, menu);
    this.selectedWidget = item;
  }

  getComponent(componentName: string) {
    switch (componentName) {
      case 'app-widget-1': return Widget1Component;
      case 'app-widget-2': return Widget2Component;
      case 'app-widget-3': return Widget3Component;
      case 'app-widget-4': return Widget4Component;
      case 'app-widget-5': return Widget5Component;
      default: return null;
    }
  }

  public deleteItem() {
    const index = this.items.findIndex(item => item.component === this.selectedWidget.component);

    if (index !== -1) {
      this.items[index].component = null;
      console.log("Item deleted successfully!");
    } else {
      console.log("Item not found in the array!");
    }
  }

  public addBlock(){
    const newId = 'block' + (this.items.length + 1);
    this.items.push({ id: newId, component: null, cols: 1, rows: 1, y: 0, x: 0 });
    console.log("New block added successfully:", newId);
  }

  public addWidget(widget: any) {
    console.log(this.selectedWidget);
    console.log(widget);
    const index = this.items.findIndex(item => item === this.selectedWidget);

    if (index !== -1) {
      this.items[index].component = widget;
      console.log("Item add successfully!");
    } else {
      console.log("Item not found in the array!");
    }
  }

  public isWidgetAdded(componentName: string): boolean {
    // Перевіряємо, чи є компонент вже доданим до масиву items
    return this.items.some(item => item.component === componentName);
  }


  removeItem(itemT: any) {
    const index = this.items.findIndex(item => item.id === itemT.id);

    if (index !== -1) {
      this.items.splice(index, 1);
      console.log("Item deleted successfully!");
    } else {
      console.log("Item not found in the array!");
    }
  }
}
