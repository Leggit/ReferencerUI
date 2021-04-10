import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Field } from '../models/ref.model';

@Injectable({
  providedIn: 'root'
})
export class InputControlService {

  constructor() { }

  toFormGroup(fields: Field[]): FormGroup {
    const group: any = [];

    fields.forEach(field => {
      group[field.name] = field.required ?
        new FormControl("", Validators.required)
        : new FormControl("")
    });

    return new FormGroup(group);
  }
}
