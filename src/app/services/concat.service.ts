import { Injectable } from '@angular/core';
import {FieldType, IReference} from '../models/reference.model';

@Injectable({
  providedIn: 'root'
})
export class ConcatService {

  constructor() { }

  genarateReference(reference: IReference): string {
    let referenceText = "";

    reference.fields.forEach((field) => {
      let formattedText = "";

      if(!field.required && !field.value) {
        return;
      }

      if(field.dateFormat && field.value) {
        const date = new Date(field.value)

        switch(field.dateFormat) {
          case "ddMMyyyy":
            field.value = date.toLocaleString();
            break;
          case "ddMMMM":
            field.value = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`
            break;
          case "ddMMMMyyyy":
            field.value = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
            break;
          default:
            throw new Error("Invalid date format: " + field.dateFormat)
        }
      }

      if(field.type === FieldType.URL) {
        field.value = `<a href="${field.value}">${field.value}</a>`;
      }

      formattedText = (field.prefix ? field.prefix : "") + (field.value ? field.value : "") + (field.suffix ? field.suffix : "");

      if(field.italic) {
        formattedText = "<em>" + formattedText + "</em>";
      }

      referenceText = referenceText + (formattedText ? formattedText : "");
    });

    return referenceText;
  }
}
