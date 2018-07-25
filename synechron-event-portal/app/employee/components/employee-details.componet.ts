import { Component, Input } from '@angular/core';
import { Employee } from "../models/employee";
@Component({
    selector: 'employee-details',
    templateUrl: '../views/employee-list.component.html'
})
export class ComponentNameComponent {

    constructor() { }
    title: string = "Details of - "
    @Input() employee: Employee;

}
}