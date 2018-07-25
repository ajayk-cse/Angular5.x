import { Component, OnInit } from "@angular/core";
import { Employee, Departments, Designations, EmployeeBizAction } from "./app.emp.model";
import { FormGroup,FormControl,Validator, Validators } from "@angular/forms";
import { CustomValidator } from "./app.custom.validation";
@Component({
    selector: "app-empform-component",
    templateUrl: "./../empFormcomponent/app.empform.view.html"
})
// onInit interface is used to manage default Lifecycle of Component
export class EmployeeFormComponent implements OnInit {
    emp:Employee;
    emps:Array<Employee>;
    empObj:EmployeeBizAction;
    depts=Departments;
    desigs=Designations;
    tableColHeaders:Array<string>;
    isSubmitted:boolean;
    frmEmp:FormGroup;
    // required pattern="[0-9]*" minlength="2" maxlength="5"
    constructor() {
        this.emp = new Employee(0,"",0,"","");
        // link Model Porperties with FormContol
        this.frmEmp = new FormGroup({
            "EmpNo":new FormControl(this.emp.EmpNo,
                Validators.compose(
                    [Validators.required,Validators.pattern("[0-9]*"),
                Validators.minLength(2),Validators.maxLength(5)])),
            "EmpName":new FormControl(this.emp.EmpName),
            "Salary":new FormControl(this.emp.Salary,
                 Validators.compose([Validators.required,CustomValidator.Validate])),
            "DeptName":new FormControl(this.emp.DeptName),
            "Designation":new FormControl(this.emp.Designation)
        });
        this.emps = new Array<Employee>();
        this.empObj = new EmployeeBizAction();
        this.tableColHeaders = new Array<string>();
        this.isSubmitted = false;
    }
    // the method invoked immediately after constructor
    // used to contain the logic which may delay COnstructor execution e.g. Service call
    ngOnInit() {
        this.emps = this.empObj.employees;
        for(let c in this.emp) {
            this.tableColHeaders.push(c);
        }
    }
    clear():void {
        this.emp = new Employee(0,"",0,"","");
    }
    save():void {
        this.emps =this.empObj.addEmployee(this.emp);
        this.isSubmitted=false;
    }
    getSelectedEmp(e:Employee) {
        // create a Deep-Copy of e using
        // object.assign
        this.emp = Object.assign({},e);
    }
    loadForm() {
        this.isSubmitted = true;
    }
}