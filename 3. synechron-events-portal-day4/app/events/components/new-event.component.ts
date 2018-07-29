import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


import { SepEventsService } from '../services/sep-events.service';
import { EventForm } from '../models/event-form';

@Component({
    selector: 'new-event',
    templateUrl: '../views/new-event.component.html',
    styles: ['input.ng-invalid { border-left:3px solid red; } input.ng-valid { border-left:3px solid green; }'],
})
export class NewEventComponent implements OnInit {
    constructor(@Inject(SepEventsService) private _eventsService: SepEventsService,@Inject(Router) private _router: Router) {

    }
    event: EventForm = new EventForm();
    pageTitle: string = "New Event Registration Form";
    ngOnInit() {
        
    }
    registerNewEvent(): void {
        //this.event.logo = "images/noimage.png";
        this._eventsService.registerNewEvent(this.event.eventForm.value).subscribe(
            data => this._router.navigateByUrl("/events"),
            error => console.log(error),
            () => console.log("Service call completed!")
        );
    }
}