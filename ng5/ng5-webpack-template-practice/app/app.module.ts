import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {AppComponent} from "./app.component"
import { EmployeeComponent } from "./components/employee/app.components.employee";
import {EmployeeDetailComponent} from "./components/employee/employee-details.componet";
import {EventComponent} from "./components/employee/app.components.event";
import {EventDetailComponent} from "./components/employee/event-details.componet";


@NgModule({
    imports:[BrowserModule],
    exports:[],
    declarations:[AppComponent, EmployeeComponent, EmployeeDetailComponent, EventComponent, EventDetailComponent],
    providers:[],
    bootstrap:[EmployeeComponent]
})
export class AppModule{ //export keyword is used so that it can register itself for main use

}