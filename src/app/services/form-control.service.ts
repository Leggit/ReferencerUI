import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IField } from '../models/reference.model';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(fields: IField[]): FormGroup {
    const group: any = [];

    fields.forEach(field => {
      group[field.uuid] = field.required ?
        new FormControl("", Validators.required)
        : new FormControl("")
    });

    return new FormGroup(group);
  }
}
