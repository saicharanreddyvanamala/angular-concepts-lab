import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'append'
})
export class AppendPipe implements PipeTransform {
  transform(value: string, appendText: string = '', position: 'end' | 'start' = 'end') {
    if(!value) return '';
    return position === 'end' ? `${value}${appendText}` : `${appendText}${value}`;
  }
}
