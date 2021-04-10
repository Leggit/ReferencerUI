import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from "rxjs/operators"
import { RefOption, RefOptions } from 'src/app/models/ref-option.model';
import { ReferenceService } from 'src/app/services/reference.service';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.css']
})
export class ReferenceFormComponent implements OnInit {

  refOptions: RefOption[] = [];
  refOutput = "";

  constructor(public referenceService: ReferenceService) { 
  }

  ngOnInit(): void {
    this.referenceService.getRefOptions().subscribe(
      (data: RefOptions) => this.refOptions = data.options,
      (err: any) => console.log(err),
    );
  }

  getReferenceDetails(selectedOption: RefOption) {
    console.log(selectedOption)
  }
}

