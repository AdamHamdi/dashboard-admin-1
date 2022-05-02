import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './main/calendar/calendar.component';
import { ChartsComponent } from './main/charts/charts.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { FormsComponent } from './main/forms/forms.component';
import { MapsComponent } from './main/maps/maps.component';
import { PagesComponent } from './main/pages/pages.component';
import { ProductsComponent } from './main/products/products.component';
import { ProfileComponent } from './main/profile/profile.component';
import { TablesComponent } from './main/tables/tables.component';
import { WidgetsComponent } from './main/widgets/widgets.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }