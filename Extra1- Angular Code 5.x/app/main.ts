// 1. The NgModule is used to define module class
import { NgModule } from "@angular/core";
// 1a. The BrowserModule for browser instance
import { BrowserModule } from "@angular/platform-browser";
// 1b. The platformBrowserDynamic for dynamic DOM execution
// this object is used for loading AppModule in Browser instance
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// 1c. Import FormsModule for Two-Way binding
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
// 1d. Import HttpModule from @angular/http for Getting Http instances
import { HttpModule } from "@angular/http";

// 2. Import the Component created
import { SimpleComponent } from "./component/simplecomponent/app.simple.component";
import { EmployeeComponent } from "./component/employeecomponent/app.employee.component";
import { EmployeeFormComponent } from "./component/employeeformcomponent/app.employee.component";
import { CategoryComponent } from "./component/masterdetails/app.category.component";
import { ProductComponent } from "./component/masterdetails/app.product.component";

// 2a. Import Injectable classes

import { EmployeeOperations } from "./component/employeeservicecomponent/app.emp.service";
import { EmployeeServiceComponent } from "./component/employeeservicecomponent/app.employee.component";
import { EmployeeHttpComponent } from "./component/employeehttpcomponent/app.employee.component";

import { EmployeeHttpService } from "./component/employeehttpcomponent/app.emphttp.service";
import { CategorySenderComponent } from "./component/masterdetailsservice/app.category.component";
import { ProductReceiverComponent } from "./component/masterdetailsservice/app.product.component";
import { CommunicationService } from "./component/masterdetailsservice/app.communication.service";
import { CustomDirectiveComponent } from "./component/customdirective/app.custom.directive.component";
import { ColorDirective } from "./component/customdirective/app.custom.directive";

import { routing } from "./component/routingapp/app.route.table";
import { HomeComponent } from "./component/routingapp/app.home.component";
import { AboutComponent } from "./component/routingapp/app.about.component";
import { ContactComponent } from "./component/routingapp/app.contact.component";
import { MainComponent } from "./component/routingapp/app.main.component";
import { ListComponent } from "./component/routingapp/app.list.component";

// configure ==> All Standard Module
// properties
// imports:[] ==> All Standard modules
// declaration:[] ==> All Components and Custom Directives
// providers:[] ==> All Services aka injectable
// bootstrap:[] ==> All components to be executed when app loads
@NgModule({
   imports:[BrowserModule,FormsModule,ReactiveFormsModule,
    HttpModule,routing],
   declarations:[SimpleComponent,
    EmployeeFormComponent, CategoryComponent,
    ProductComponent, EmployeeServiceComponent,
    EmployeeComponent, EmployeeHttpComponent,
    CategorySenderComponent,ProductReceiverComponent,
    CustomDirectiveComponent,ColorDirective,
    HomeComponent,AboutComponent,ContactComponent,
    MainComponent,ListComponent
],
    providers:[EmployeeOperations,EmployeeHttpService,CommunicationService],
   bootstrap:[MainComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
