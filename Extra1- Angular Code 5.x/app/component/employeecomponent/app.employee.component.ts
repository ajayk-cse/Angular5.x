import { Component, OnInit } from "@angular/core";
import {
  Employee,
  EmployeeOperations,
  Departments,
  Designations
} from "./app.employee.model";
@Component({
  selector: "app-emp-component",
  templateUrl: "./app.employee.view.html"
})
export class EmployeeComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  empOp: EmployeeOperations;
  depts=Departments;
  desigs=Designations;
  tableColumns:Array<string>;

  constructor() {
    this.emp = new Employee(0, "", 0, "", "");
    this.emps = new Array<Employee>();
    this.empOp = new EmployeeOperations();
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
