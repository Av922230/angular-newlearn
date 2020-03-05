import{Component}  from '@angular/core';
@Component({
  selector:'Employee',
  templateUrl:'../EmployeeDetails/EmployeeView.html'
})

export class EmployeeClass
{
  public Name :string ='Arvind';
  public Age :number=30;

   EmployeeList:any[] = [{
    Name:"A",Age:20,Salery:5000,DOB:"15/09/1989"},
    {Name:"B",Age:21,Salery:6000,DOB:"16/08/1988"},
    {Name:"C",Age:22,Salery:7000,DOB:"17/07/1987"},
    {Name:"D",Age:23,Salery:8000,DOB:"18/06/1986"},
    {Name:"E",Age:24,Salery:9000,DOB:"19/05/1985"},
    {Name:"F",Age:25,Salery:10000,DOB:"20/04/1984"}];
}