import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
    pure: false
})

@Injectable()
export class SearchPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        console.log('Filter!!')
        if (!items || !value) {  
            return items;  
        }
        return items.filter(item => item[field].indexOf(value) !== -1);
    }
}