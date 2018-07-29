import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { eventsRoutes } from "./events.routing";

import { EventsListComponent } from './components/events-list.component';
import { EventDetailsComponent } from './components/event-details.component';
import { NewEventComponent } from "./components/new-event.component";
import { FirstLetterCapitalPipe } from './pipes/first-letter-capital.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

import { SepEventsService } from './services/sep-events.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        eventsRoutes
    ],
    exports: [
        EventsListComponent
    ],
    declarations: [
        EventsListComponent,
        EventDetailsComponent,
        FirstLetterCapitalPipe,
        FilterByPipe,
        NewEventComponent
    ],
    providers: [
        SepEventsService
    ],
})
export class EventsModule { }
