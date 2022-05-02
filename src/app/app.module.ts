import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { TopbarComponent } from './topbar/topbar.component';
import { MainRoutingModule } from './main/main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent ,TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MaterialModule,
    BrowserAnimationsModule ,
     MainRoutingModule, BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     NgApexchartsModule,
     BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
