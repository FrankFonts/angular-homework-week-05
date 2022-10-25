import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infectionDataTransform',
})
export class infectionDataTransformPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }
}
