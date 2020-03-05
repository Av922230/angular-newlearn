import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {EmployeeClass } from './EmployeeDetails/Employee.component';
import {TwoWayDataBinding} from './TwoWayDataBinding/TwoWayComponent';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,EmployeeClass,TwoWayDataBinding ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
