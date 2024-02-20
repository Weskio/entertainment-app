import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbertowords',
  standalone: true
})
export class NumbertowordsPipe implements PipeTransform {

  transform(value: any): string {
   // if (isNaN(value)) return null;

    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    if (value < 10) {
      return words[value];
    } else {
      return value.toString();
    }
  }

}
