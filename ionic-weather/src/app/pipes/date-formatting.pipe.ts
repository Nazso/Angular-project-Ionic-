import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatting'
})
export class DateFormattingPipe implements PipeTransform {

  transform(value: string[]): unknown {

    let val = new Date(+value * 1000);

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[val.getDay()] + ', ' + val.getDate() + ' ' + months[val.getMonth()] + ' ' + val.getHours() + ':' + val.getMinutes();
  }

}
