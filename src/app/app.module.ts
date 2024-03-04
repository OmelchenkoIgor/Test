import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {GridsterComponent, GridsterItemComponent} from 'angular-gridster2';
import {Widget1Component} from '../components/widgets/widget-1/widget-1.component';
import {Widget2Component} from "../components/widgets/widget-2/widget-2.component";
import {Widget3Component} from "../components/widgets/widget-3/widget-3.component";
import {Widget4Component} from "../components/widgets/widget-4/widget-4.component";
import {Widget5Component} from "../components/widgets/widget-5/widget-5.component";
import {NgApexchartsModule} from "ng-apexcharts";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    Widget5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterComponent,
    GridsterItemComponent,
    NgApexchartsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSelectModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzDrawerModule,
    NzDropDownModule,
    NzCheckboxModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
