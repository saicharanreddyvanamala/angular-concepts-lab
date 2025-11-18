import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'impureUppercase',
  pure: false
})
export class ImpureUppercasePipe implements PipeTransform {
  transform(value: string | string[]) {
    console.log(`IMPURE PIPE executed and value is: ${value}`);
    if (typeof value === 'string') return value.toUpperCase();
    if(Array.isArray(value)) {
      return value.map(item => item.toUpperCase());
    }
    return value;
  }
}
