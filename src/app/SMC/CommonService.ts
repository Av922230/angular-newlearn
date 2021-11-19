import { Component } from '@angular/core';

@Component({
  selector: 'CommonService',
  templateUrl: '../SMC/CommonService.html',
})
export class CommonServiceClass {
  public Price1: number = 0;
  public Unit1: number = 0;
  public Price2: number = 0;
  public Unit2: number = 0;
  public clickCount :number = 0;
}
