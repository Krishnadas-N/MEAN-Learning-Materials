import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

 transform(value: any) {
     if(typeof value === 'string'){
        return value.split('').reverse().join('')
     }
     return value
 }

}
