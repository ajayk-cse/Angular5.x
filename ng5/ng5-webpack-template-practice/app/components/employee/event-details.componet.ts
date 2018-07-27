import { Component, Input } from '@angular/core';
import { Event } from "../../models/employee/app.model.event";
@Component({
    selector: 'event-details',
    template: '<h1 [innerText]="eventComp.Description"> </h1>'
})
export class EventDetailComponent {

    constructor() { }
    title: string = "Details of - "
    @Input() eventComp: Event;

}
