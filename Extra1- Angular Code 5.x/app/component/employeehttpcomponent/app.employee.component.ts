import { Component, OnInit } from "@angular/core";
import { Employee, Departments, Designations } from "./app.employee.model";
import { EmployeeHttpService } from "./app.emphttp.service";
import { Response } from "@angular/http";
@Component({
  selector: "app-emphttp-component",
  templateUrl: "./app.employee.view.html"
})
export class EmployeeHttpComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  depts = Departments;
  desigs = Designations;
  tableColumns: Array<string>;

  constructor(private serv: EmployeeHttpService) {
    this.emp = new Employee(0, "", 0, "", "");
    this.emps = new Array<Employee>();
    this.tableColumns = new Array<string>();
  }
  // the method is immediately invoked after the constructor
  // hence put logic that may delay the ctor execution
  ngOnInit(): void {
    for (let p in this.emp) {
      this.tableColumns.push(p);
    }
    this.loadData();
  }

  private loadData(): void {
    // call the method from the service by
    // subscribing to it
    this.serv.get().subscribe(
      (resp: Response) => {
        this.emps = resp.json();
      },
      error => {
        console.log(`Error Occured ${error.status} ${error.statusText}`);
      }
    );
  }

  clear(): void {
    this.emp = new Employee(0, "", 0, "", "");
  }
  save(): void {
    this.serv.post(this.emp).subscribe(
      (resp: Response) => {
        this.emps.push(resp.json());
      },
      error => {
        console.log(`Error Occured ${error.status} ${error.statusText}`);
      }
    );
  }

  getselected(e: Employee): void {
    // this.emp  =e;
    this.emp = Object.assign({}, e);
  }
}
