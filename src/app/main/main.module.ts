import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { FormsComponent } from './main/forms/forms.component';
import { TablesComponent } from './main/tables/tables.component';
import { MapsComponent } from './main/maps/maps.component';
import { WidgetsComponent } from './main/widgets/widgets.component';
import { ChartsComponent } from './main/charts/charts.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { PagesComponent } from './main/pages/pages.component';
import { ProfileComponent } from './main/profile/profile.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './main/products/products.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FormsComponent,
    TablesComponent,
    MapsComponent,
    WidgetsComponent,
    ChartsComponent,
    CalendarComponent,
    PagesComponent,
    ProfileComponent,
    ProductsComponent 
  ],
  imports: [
    CommonModule,
     MaterialModule,
     BrowserAnimationsModule,
     BrowserModule,
     NgApexchartsModule ,
      
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], 
})
export class MainModule { } 
