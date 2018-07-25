import { Component, OnInit } from "@angular/core";
import {
  Employee,
  Departments,
  Designations
} from "./app.employee.model";

import { EmployeeOperations } from "./app.emp.service";


@Component({
  selector: "app-empserv-component",
  templateUrl: "./app.employee.view.html"
})
export class EmployeeServiceComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  depts=Departments;
  desigs=Designations;
  tableColumns:Array<string>;

  // inject the EmployeeOperations using ctor injection
  constructor(private empOp:EmployeeOperations) {
    this.emp = new Employee(0, "", 0, "", "");
    this.emps = new Array<Employee>();
    this.tableColumns = new Array<string>();
  }
  // the method is immediately invoked after the constructor
  // hence put logic that may delay the ctor execution
  ngOnInit(): void {
      this.emps = this.empOp.getEmployees();
      for(let p in this.emp) {
          this.tableColumns.push(p);
      }
  }
  clear():void {
    this.emp = new Employee(0, "", 0, "", "");
  }
  save():void {
      this.emps = this.empOp.saveEmployee(this.emp);
  }

  getselected(e:Employee):void {
      // this.emp  =e;
      this.emp = Object.assign({},e);
  }

}
