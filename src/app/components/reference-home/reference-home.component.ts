import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from "rxjs/operators"
import { ReferenceOption, ReferenceOptions } from 'src/app/models/reference-option.model';
import { ReferenceModel } from 'src/app/models/reference.model';
import { ConcatService } from 'src/app/services/concat.service';
import { ReferenceService } from 'src/app/services/reference.service';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-home.component.html',
  styleUrls: ['./reference-home.component.css']
})
export class ReferenceHomeComponent implements OnInit {

  refDetails!: ReferenceModel;
  refOutput = "";

  constructor(public referenceService: ReferenceService, private concatService: ConcatService) { 
  }

  ngOnInit(): void {
  }

  getReferenceDetails(selectedOption: ReferenceOption) {
    this.referenceService.getRefDetails(selectedOption.uuid).subscribe(
      (data: ReferenceModel) => this.refDetails = data,
      (err: any) => console.log(err)
    );
  }

  genarateReference(refDetails: ReferenceModel) {
    this.refOutput = this.concatService.genarateReference(refDetails);
  }
}

