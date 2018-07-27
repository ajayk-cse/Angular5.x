import { Component } from "@angular/core";

import {Event} from "../../models/employee/app.model.event";

@Component({
  selector: "app-event-component",
  templateUrl: "../../views/employee/app.views.event.html"
})
export class EventComponent {
  event: Event;
  events: Array<Event>;
  title:string;
  selectedEvent: Event;

  constructor() {
    this.event = new Event(0, "", 0,null, "");
    this.events = new Array<Event>();
    this.title="Welcome to Synechron Event Detail Portal";
    

    this.events.push(new Event(101,"IT",12000,new Date(),"Detail discussion about IT Event"));
    this.events.push(new Event(102,"Sales",72000,new Date(),"Detail discussion about Sales Event"));
    this.events.push(new Event(103,"HRD",22000,new Date(),"Detail discussion about HRD Event"));
    this.events.push(new Event(104,"Account",52000,new Date(),"Detail discussion about Accounts Event"));
    
  }  

  getSelectedEvent(e:Event):void{
    this.event=Object.assign({},e);
    this.selectedEvent=e; 
  }
  
}
