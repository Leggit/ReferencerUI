import { Component, OnInit } from '@angular/core';
import { ReferenceOption, ReferenceOptions } from 'src/app/models/reference-option.model';
import { ReferenceModel } from 'src/app/models/reference.model';
import { ConcatService } from 'src/app/services/concat.service';
import { ErrorService } from 'src/app/services/error.service';
import { ReferenceService } from 'src/app/services/reference.service';

@Component({
  selector: 'app-reference-home',
  templateUrl: './reference-home.component.html',
  styleUrls: ['./reference-home.component.css']
})
export class ReferenceHomeComponent implements OnInit {

  refOptions!: ReferenceOption[];
  refDetails!: ReferenceModel;
  refOutput = "";

  constructor(
    private readonly referenceService: ReferenceService,
    private readonly concatService: ConcatService,
    private readonly errorService: ErrorService
  ) { 
  }

  ngOnInit(): void {
    this.referenceService.getRefOptions().subscribe(
      (data: ReferenceOptions) => this.refOptions = data.options,
      (err: any) => {
        this.errorService.showError(err.message);
        console.log(err);
      }
    )
  }

  getReferenceDetails(selectedOption: ReferenceOption) {
    this.referenceService.getRefDetails(selectedOption.uuid).subscribe(
      (data: ReferenceModel) => this.refDetails = data,
      (err: any) => {
        this.errorService.showError(err.message);
        console.log(err);
      } 
    );
  }

  genarateReference(refDetails: ReferenceModel) {
    this.refOutput = this.concatService.genarateReference(refDetails);
  }
}

