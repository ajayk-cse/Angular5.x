import { NgModule } from "@angular/core";
// a. BrowserModule from angular/platform-browser
import { BrowserModule } from "@angular/platform-browser";
// b. use platformBrowserDynamic from angular/platform-browser-dynamic
// for bootstrapping of NgModule
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


// import all Components,Directives and Services so that they can be
// configured with NgModule
import { SimpleComponent } from "./components/app.simple.component";
import { EmployeeComponent } from "./components/empcomponent/app.emp.component";
import { EmployeeFormComponent } from "./components/empFormcomponent/app.emp.component";
import { EmployeeServiceComponent } from "./components/empservicecomponent/app.emp.component";
import { EmployeeService } from "./components/empservicecomponent/app.emp.service";
import { SecureService } from "./components/httpservicesecurecall/app.secureservice";
import { CallComponent } from "./components/httpservicesecurecall/app.secureservice.component";
import { CategoryComponent } from "./components/masterdetails/app.category.component";
import { ProductComponent } from "./components/masterdetails/app.product.component";
import { CustomDirectiveComponent } from "./components/customdirective/app.custom.directive.component";
import { ColorDirective } from "./components/customdirective/app.custom.color.directive";
import { HomeComponent } from "./components/routingapp/app.home.component";
import { ContactComponent } from "./components/routingapp/app.contact.component";
import { AboutComponent } from "./components/routingapp/app.about.component";
import { routing } from "./components/routingapp/app.route.table";
import { MainComponent } from "./components/routingapp/app.main.component";
import { TestMeComponent } from "./components/componentfortest/app.component.data";
import { CustomPipeComponent } from "./components/pipes/app.custom.pipe.component";
import { ProductFilterPipe } from "./components/pipes/custome.pipe";


// 1. imports ==> Used to import standard angular modules
// 2. declarations ==> Used to declare all directives and components
// 3. bootstrap ==> Used to define initial components to be loaded

@NgModule({
  imports:[BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,
  routing],
  declarations:[SimpleComponent,EmployeeComponent,EmployeeFormComponent,
    EmployeeServiceComponent,CallComponent,
  CategoryComponent,ProductComponent,ColorDirective,
  HomeComponent,ContactComponent,AboutComponent,
CustomDirectiveComponent,MainComponent,TestMeComponent,
 CustomPipeComponent,ProductFilterPipe],
    providers:[EmployeeService,SecureService],
  bootstrap:[EmployeeComponent]
})
export class AppModule {}
// the AppModule with all its decoarations will be loaded in browser
platformBrowserDynamic().bootstrapModule(AppModule);
