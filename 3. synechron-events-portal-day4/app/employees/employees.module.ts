import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { employeesRoutes } from "./employees.routing";

import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";


@NgModule({
    imports: [CommonModule, employeesRoutes],
    exports: [EmployeesListComponent],
    declarations: [
        EmployeesListComponent,
        EmployeeDetailsComponent,
    ],
    providers: []
})
export class EmployeesModule {

}