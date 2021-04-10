import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RefModel } from 'src/app/models/ref.model';
import { InputControlService } from 'src/app/services/input-control.service';

@Component({
  selector: 'app-ref-input',
  templateUrl: './ref-form.component.html',
  styleUrls: ['./ref-form.component.css']
})
export class RefFormComponent implements OnInit {

  @Input() refDetails!: RefModel;
  form!: FormGroup;

  constructor(private inputControlService: InputControlService) { 
  }

  ngOnInit(): void {
    this.form = this.inputControlService.toFormGroup(this.refDetails.fields);
  }

  onSubmit() {
    console.log(this.form.getRawValue())
  }

}
