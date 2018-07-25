import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee/components/employee-list.component";
import { EmployeeDetails  } from "./employee/components/employee-details.componet";

@NgModule({
    imports:[ BrowserModule],
    exports:[],//not needed
    declarations:[AppComponent,EmployeeListComponent,EmployeeDetails],
    providers:[], //not needed
    bootstrap:[AppComponent]

})
export class AppModule{

}