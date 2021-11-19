import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeClass } from './EmployeeDetails/Employee.component';
import { TwoWayDataBinding } from './TwoWayDataBinding/TwoWayComponent';
import { CommonServiceClass } from './SMC/CommonService';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeClass,
    TwoWayDataBinding,
    CommonServiceClass,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
