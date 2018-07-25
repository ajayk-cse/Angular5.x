import { Injectable,EventEmitter,Output } from "@angular/core";

@Injectable()
export class CommunicationService {
    // number member to accept payload
    id:number;

    // declare event emitter
    // which will be reiased based on
    // request from sender
    // it will be notified to receiver
    // if receiver has subscription

    @Output()
    receivedFilter:EventEmitter<number>;
    constructor() {
        this.receivedFilter= new EventEmitter<number>();
    }

    // add a method which will raise/emit event

    raiseEvent(id:number):void {
        this.id = id;
        this.receivedFilter.emit(id);
    }
}