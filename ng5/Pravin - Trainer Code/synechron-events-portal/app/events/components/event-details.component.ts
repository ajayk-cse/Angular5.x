import { Component, Input, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


import { SepEvent } from "../models/sep-event";
import { SepEventsService } from '../services/sep-events.service';

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventDetailsComponent implements OnInit {
    constructor(@Inject(SepEventsService) private _eventsService: SepEventsService, @Inject(ActivatedRoute) private _route: ActivatedRoute) {

    }
    title: string = "Details of Event - ";
    event: SepEvent;
    eventId: number;
    ngOnInit(): void {
        this._route.params.subscribe((params) =>
            this.eventId = params["id"]
        );
        this._eventsService.getSingleEvent(this.eventId).subscribe(
            data => this.event = data,
            err => console.log(err),
            () => console.log("Service call completed!")
        );
    }
    //@Input("receivedEventId") eventId: number;
    //@Output("onConfirmation") sendConfirmation: EventEmitter<string> = new EventEmitter<string>();

    // ngOnChanges(): void {
    //     this.event = this._eventsService.getSingleEvent(this.eventId);
    // }

    // onSendConfirmation(): void {
    //     this.sendConfirmation.emit("Received Event Successfully!");
    // }

}