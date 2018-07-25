import { Component, OnInit } from "@angular/core";
import { Employee, Departments, Designations } from "./app.emp.model";
import { EmployeeService } from "./app.emp.service";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
@Component({
    selector: "app-empservice-component",
    templateUrl: "./../empservicecomponent/app.empservice.view.html",
})
// onInit interface is used to manage default Lifecycle of Component
export class EmployeeServiceComponent implements OnInit {
    emp:Employee;
    emps:Array<Employee>;
    depts=Departments;
    desigs=Designations;
    tableColHeaders:Array<string>;
    constructor(private serv:EmployeeService) {
        this.emp = new Employee(0,"",0,"","");
        this.emps = new Array<Employee>();
        this.tableColHeaders = new Array<string>();
    }
    // the method invoked immediately after constructor
    // used to contain the logic which may delay COnstructor execution e.g. Service call
    ngOnInit() {
        for(let c in this.emp) {
            this.tableColHeaders.push(c);
        }
        this.loadData();
    }
    loadData():void {
        this.serv.get().subscribe((resp:Response)=> {
            this.emps = resp.json();
        });
    }
    clear():void {
        this.emp = new Employee(0,"",0,"","");
    }
    save():void {
        this.serv.post(this.emp).subscribe((resp:Response)=> {
            alert(resp.json().EmpId);
            this.loadData();
        });
    }
    getSelectedEmp(e:Employee) {
        // create a Deep-Copy of e using
        // object.assign
        this.emp = Object.assign({},e);
    }
}