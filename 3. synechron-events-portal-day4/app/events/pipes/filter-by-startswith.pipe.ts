import { Pipe, PipeTransform } from '@angular/core';

import {SepEvent} from "../models/sep-event"

@Pipe({
    name: 'eventsStartWithFilter'
})

export class FilterByStartsWithPipe implements PipeTransform {
    transform(value: SepEvent[], ...args: any[]): SepEvent[] {
        let filter:string=args[0]?args[0].toLocaleLowerCase():null;

        return filter?value.filter((event: SepEvent)=>
          event.eventName.toLocaleLowerCase().startsWith(filter)):value;
        
        
    }
}