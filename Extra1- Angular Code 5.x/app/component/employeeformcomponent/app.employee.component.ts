import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NumericValidator } from "./app.custom.validators";

import {
  Employee,
  EmployeeOperations,
  Departments,
  Designations
} from "./app.employee.model";
@Component({
  selector: "app-empform-component",
  templateUrl: "./app.employee.view.html"
})
export class EmployeeFormComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  empOp: EmployeeOperations;
  depts = Departments;
  desigs = Designations;
  tableColumns: Array<string>;
  isSubmitted: boolean;

  // declare the FormGroup object that will be uese
  // for linking form with Model properties using FormControl
  frmGroup: FormGroup;

  constructor() {
    this.emp = new Employee(0, "", 0, "", "");
    this.emps = new Array<Employee>();
    this.empOp = new EmployeeOperations();
    this.tableColumns = new Array<string>();
    this.isSubmitted = true;

    // link model proeprties with formGroup
    // note: The key represents formControlName
    this.frmGroup = new FormGroup({
      EmpNo: new FormControl(
        this.emp.EmpNo,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(5),
          Validators.pattern("[0-9]+")
        ])
      ),
      EmpName: new FormControl(this.emp.EmpName),
      Salary: new FormControl(this.emp.Salary,
      Validators.compose([NumericValidator.chekPositiveNumeric])),
      DeptName: new FormControl(this.emp.DeptName),
      Designation: new FormControl(this.emp.Designation)
    });
  }
  // the method is immediately invoked after the constructor
  // hence put logic that may delay the ctor execution
  ngOnInit(): void {
    this.emps = this.empOp.getEmployees();
    for (let p in this.emp) {
      this.tableColumns.push(p);
    }
  }
  clear(): void {
    this.emp = new Employee(0, "", 0, "", "");
  }
  save(): void {
    this.emps = this.empOp.saveEmployee(this.emp);
    this.isSubmitted = true;
  }

  getselected(e: Employee): void {
    // this.emp  =e;
    this.emp = Object.assign({}, e);
  }
  loadForm(): void {
    this.isSubmitted = false;
    this.emp = new Employee(0, "", 0, "", "");
  }
}
