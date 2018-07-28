
import { Component , Input, Output, EventEmitter} from '@angular/core';

import { SepEvent } from "../models/sep-event";

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventDetailComponent {
    constructor() { }
    title:string="Details of Event - ";
    @Input("receivedEvent") event: SepEvent; // receivedEvent - property aliasing
   // @Input("receivedEvent") eventId: number; // receivedEvent - property aliasing
    @Output("onConfirmation") sendConfirmation: EventEmitter<string> = new EventEmitter<string>();
    
    onSendConfirmation():void{
        this.sendConfirmation.emit("Received event successfully!");
    }
}