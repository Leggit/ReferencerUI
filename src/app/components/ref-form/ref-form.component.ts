import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RefModel } from 'src/app/models/ref.model';
import { InputControlService } from 'src/app/services/input-control.service';

@Component({
  selector: 'app-ref-form',
  templateUrl: './ref-form.component.html',
  styleUrls: ['./ref-form.component.css']
})
export class RefFormComponent implements OnInit {

  @Input() refDetails!: RefModel;
  @Output() formSubmit: EventEmitter<RefModel> = new EventEmitter<RefModel>()
  form!: FormGroup;

  constructor(private inputControlService: InputControlService) { 
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
