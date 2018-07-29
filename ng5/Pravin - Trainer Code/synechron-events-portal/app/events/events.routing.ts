import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { EventsListComponent } from "./components/events-list.component";
import { EventDetailsComponent } from "./components/event-details.component";
import { NewEventComponent } from "./components/new-event.component";

const evntRoutes: Routes = [
    {
        path: '',
        component: EventsListComponent
    },
    {
        path:'new',
        component:NewEventComponent
    },
    {
        path: ':id',
        component: EventDetailsComponent
    }
];

export const eventsRoutes: ModuleWithProviders = RouterModule.forChild(evntRoutes);