import { Component } from "@angular/core";
import {
  Employee
} from "../../models/employee/app.model.employee";
@Component({
  selector: "app-emp-component",
  templateUrl: "../../views/employee/app.views.employee.html"
})
export class EmployeeComponent {
  emp: Employee;
  emps: Array<Employee>;
  selectedEmployee:Employee;
  title:string;

  constructor() {
    this.emp = new Employee(0, "", 0, "", "","");
    this.emps = new Array<Employee>();
    this.title="Welcome to Synechron Employee Detail Portal";
    

    this.emps.push(new Employee(101,"Ajay",12000,"IT","Lead",""));
    this.emps.push(new Employee(102,"Bjay",72000,"Sales","Director",""));
    this.emps.push(new Employee(103,"Cjay",22000,"HRD","Manager",""));
    this.emps.push(new Employee(104,"Djay",52000,"Accounts","Manager",""));
    
  }
  
  clear():void {
    this.emp = new Employee(0, "", 0, "", "","");
  }
  
  getselected(e:Employee):void {
      // this.emp  =e;
      this.emp = Object.assign({},e);
      this.selectedEmployee = e;
  }

}
