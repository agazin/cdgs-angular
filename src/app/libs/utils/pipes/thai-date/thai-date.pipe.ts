import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thaiDate'
})
export class ThaiDatePipe implements PipeTransform {

  transform(value: Date, args?: any) {
    const beYear = value.getFullYear() + 543;
    return `${value.getDate()}/${value.getMonth() + 1}/${beYear}`;
  }

}
