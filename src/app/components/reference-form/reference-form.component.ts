import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReferenceModel } from 'src/app/models/reference.model';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-ref-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.css']
})
export class ReferenceFormComponent implements OnInit {

  @Input() refDetails!: ReferenceModel;
  @Output() formSubmit: EventEmitter<ReferenceModel> = new EventEmitter<ReferenceModel>()
  form!: FormGroup;

  constructor(private inputControlService: FormControlService) { 
  }

  ngOnInit(): void {
    this.form = this.inputControlService.toFormGroup(this.refDetails.fields);
  }

  onSubmit(event: any) {
    event.preventDefault();
    // Push the form values onto the ref details object
    this.refDetails.fields.map(field => field.value = this.form.getRawValue()[field.name])
    this.formSubmit.emit(this.refDetails);
  }

}
