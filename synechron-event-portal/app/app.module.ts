import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


// Components
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { EventListComponent } from "./events/components/event-list-component";
import { EventDetailComponent } from "./events/components/event-details-component";

// Pipes
import { FirstLetterCapitalPipe } from "./events/pipes/first-letter-capital.pipe";
import { FilterByPipe } from "./events/pipes/filter-by.pipe";

//services
import { SepEventService } from "./events/services/sep-event.service";

//BrowserModule - makes your moduel compatable with your browser
@NgModule({
    imports: [BrowserModule,FormsModule],
    exports: [],
    declarations: [ // Component, pipes and Directive
        AppComponent, 
        EmployeesListComponent, 
        EmployeeDetailsComponent, EventListComponent, EventDetailComponent, FirstLetterCapitalPipe, FilterByPipe
    ],
    providers: [SepEventService],
    bootstrap: [AppComponent]
})
export class AppModule {

}