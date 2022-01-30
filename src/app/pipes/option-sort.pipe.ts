import { Pipe, PipeTransform } from '@angular/core';
import { ReferenceOption } from '../models/reference-option.model';

@Pipe({
  name: 'optionSort'
})
export class OptionSortPipe implements PipeTransform {

  transform(refOptions: ReferenceOption[] | null): ReferenceOption[] {
    return refOptions?.sort((a,b) => a.name.localeCompare(b.name)) ?? [];
  }

}
