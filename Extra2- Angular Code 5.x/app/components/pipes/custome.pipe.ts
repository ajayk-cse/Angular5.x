import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prodfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let filtervalue:any = args;
        if(filtervalue) {
            return value.filter(
                pr=>pr.prodName.toLowerCase()
                .indexOf(filtervalue)!=-1);
        } else {
            return value;
        }
    }
}