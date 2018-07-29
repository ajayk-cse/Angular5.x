import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";

const empRoutes: Routes = [
    {
        path: '',
        component: EmployeesListComponent
    },
    {
        path: ':eid',
        component: EmployeeDetailsComponent
    }
];

export const employeesRoutes: ModuleWithProviders = RouterModule.forChild(empRoutes);