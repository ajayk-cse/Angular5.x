// import all objects for Routing
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./app.home.component";
import { ContactComponent } from "./app.contact.component";
import { AboutComponent } from "./app.about.component";
import { EmployeeComponent } from "./../employeecomponent/app.employee.component";
import { ListComponent } from "./app.list.component";

// define Route Table
export const routes:Routes = [
    {path:"",component:HomeComponent},
    {path:"about/:id",component:AboutComponent},
    {path:"list",component:ListComponent},
    {path:"contact",component:ContactComponent,children:[
        {path:"employee",component:EmployeeComponent}
    ]}
];

// register route table in root aka NgModule
// use ModuleWithProvider to register the
// the RouterModule in root of application

export const routing:ModuleWithProviders=
    RouterModule.forRoot(routes);

