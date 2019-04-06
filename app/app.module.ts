import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomDropdownDirective} from './CustomDropdownDirective';
import { NavDropdownDirective } from './nav-dropdown.directive'
@NgModule({
  declarations: [
    AppComponent,
    CustomDropdownDirective,
    NavDropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
