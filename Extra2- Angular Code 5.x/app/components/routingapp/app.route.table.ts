// import routing objects
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./app.home.component";
import { AboutComponent } from "./app.about.component";
import { ContactComponent } from "./app.contact.component";
import { EmployeeComponent } from "../empcomponent/app.emp.component";


// define Route Table

export const routes:Routes=[
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent,
        children:[
            {path:"emp",component:EmployeeComponent}
        ]}
];

// register the Route Table in Root of Application using
// moduleWithProvider

export const routing:ModuleWithProviders =
        RouterModule.forRoot(routes);





