import { Component, OnInit, Inject } from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventService } from "../services/sep-event.service";

@Component({
    selector: 'events-list',
    templateUrl: '../views/events-list.component.html'
})

export class EventListComponent implements OnInit {
    constructor(@Inject(SepEventService)  private _eventService:SepEventService) { }
    title:string = "Synechron Event List!";
    subTitle: string = "Published by Synechron HR";
    childMessage:string="";
    selectedEvent: SepEvent;
    events: SepEvent [];
    ngOnInit():void{
        this.events = this._eventService.getAllEvents();
    }
    //searchChar:string='J';// explicit modelling we are defining here
    onEventSelection(event: SepEvent):void{
        this.selectedEvent = event;
    }

    onChildConfirmation(msg:string):void{
        this.childMessage = msg;
    }


   


}