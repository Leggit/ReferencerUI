import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from "rxjs/operators"
import { RefOption, RefOptions } from 'src/app/models/ref-option.model';
import { RefModel } from 'src/app/models/ref.model';
import { ReferenceService } from 'src/app/services/reference.service';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-home.component.html',
  styleUrls: ['./reference-home.component.css']
})
export class ReferenceHomeComponent implements OnInit {

  refOptions: RefOption[] = [];
  refDetails!: RefModel;
  refOutput = "";

  constructor(public referenceService: ReferenceService) { 
  }

  ngOnInit(): void {
    this.referenceService.getRefOptions().subscribe(
      (data: RefOptions) => this.refOptions = data.options,
      (err: any) => console.log(err),
      () => this.getReferenceDetails(this.refOptions[0])
    );
  }

  getReferenceDetails(selectedOption: RefOption) {
    this.referenceService.getRefDetails(selectedOption.uuid).subscribe(
      (data: RefModel) => this.refDetails = data,
      (err: any) => console.log(err)
    );
  }
}

