import {Component} from '@angular/core';
@Component({
  selector:'TwoWayDataBinding',
  templateUrl:'../TwoWayDataBinding/TwoWayComponentView.html'
})

export class TwoWayDataBinding{
  public First:string ="First Way";
  public Second:string ="Second Way";
  public Output:string ="Your Output";
  public Name :string ="Your Value";
}