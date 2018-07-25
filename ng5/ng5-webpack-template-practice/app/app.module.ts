import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {AppComponent} from "./app.component"
import { EmployeeComponent } from "./components/employee/app.components.employee";

@NgModule({
    imports:[BrowserModule],
    exports:[],
    declarations:[AppComponent, EmployeeComponent],
    providers:[],
    bootstrap:[EmployeeComponent]
})
export class AppModule{ //export keyword is used so that it can register itself for main use

}