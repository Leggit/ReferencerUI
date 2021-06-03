import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField, IReference } from 'src/app/models/reference.model';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.css']
})
export class ReferenceFormComponent implements OnInit {

  @Input() refDetails!: IReference;
  @Output() formSubmit: EventEmitter<IReference> = new EventEmitter<IReference>()
  @Output() formReset: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private inputControlService: FormControlService) { 
  }

  ngOnInit(): void {
    this.form = this.inputControlService.toFormGroup(this.refDetails.fields);
  }

  onReset(event?: any): void {
    this.formReset.emit()
  }

  onSubmit(event: any) {
    event.preventDefault();

    if(this.form.valid) {
      // Push the form values onto the ref details object
      this.refDetails.fields.map((field: IField) => field.value = this.form.getRawValue()[field.uuid])
      this.formSubmit.emit(this.refDetails);
    } else {
      this.form.markAllAsTouched()
    }
  }

}
