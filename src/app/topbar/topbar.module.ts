import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
 

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,  BrowserAnimationsModule   
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TopbarModule { }
