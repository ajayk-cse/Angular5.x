import { Component, Input } from '@angular/core';
import { Employee } from "../../models/employee/app.model.employee";
@Component({
    selector: 'employee-details',
    template: '<h1 [innerText]="title+employee.EmpName"> </h1>'
})
export class EmployeeDetailComponent {

    constructor() { }
    title: string = "Details of - "
    @Input() employee: Employee;

}
