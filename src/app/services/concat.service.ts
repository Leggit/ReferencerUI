import { Injectable } from '@angular/core';
import { RefModel } from '../models/ref.model';

@Injectable({
  providedIn: 'root'
})
export class ConcatService {

  constructor() { }

  genarateReference(refDetails: RefModel) {
    var output: string = refDetails.format;
    
    refDetails.fields.forEach(field => {

      // Put date in the right format
      if(field.name === "AccessedDate" && field.value) {
        var date = new Date(field.value);
        var month = date.toLocaleString('default', { month: 'long' });
        field.value = `${date.getDay()} ${month} ${date.getFullYear()}`
      }

      if(field.value && field.required) {
        output = output.replace(`{${field.name}}`, field.value)
      } else if(field.value && !field.required) {
        output = output.replace(`{?${field.name}`, "")
        output = output.replace(`{${field.name}}`, field.value)
        output = output.replace(`${field.name}?}`, "")
      } else if(!field.value && !field.required) {
        output = output.replace(new RegExp(`\\{\\?${field.name}[\\s\\S]*${field.name}\\?\\}`), "")
      } else {
        throw new Error("Field to genarate reference because of invalid field: " + JSON.stringify(field));
      }

    })

    return output;
  }
}