import { Component, OnInit } from '@angular/core';
import {Employee} from './_shared/models/Employee.model';
import {EmployeeService} from './_shared/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularAPI';
  employee = new Employee();
  employees : Array<Employee> = []
  constructor(private employeeService : EmployeeService){}

  fetchEmployeeList(){
    this.employeeService.getList().subscribe(result =>this.employees = result);
  }

  ngOnInit() : void{
    this.fetchEmployeeList();
  }

  delete(emloyee : Employee):void{
    if(!confirm(`Do you really want to delete employee ${emloyee.fullName}`)){
      return;
    }
    this.employeeService.delete(emloyee.id).subscribe(
      _=>{
        this.employees = this.employees.filter(e=> e!=emloyee);
        alert(`Delete ${emloyee.fullName} successful`);
      }
    )
  }

  add():void{
    this.employeeService.create(this.employee).subscribe(
      e =>{
        this.employees.push(this.employee);
        alert('Create successful')
      }
    )
  }
}
