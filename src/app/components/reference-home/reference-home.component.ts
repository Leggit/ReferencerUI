import { Component, OnInit } from '@angular/core';
import {catchError, map, shareReplay} from 'rxjs/operators';
import { ReferenceOption } from 'src/app/models/reference-option.model';
import { IReference } from 'src/app/models/reference.model';
import { ConcatService } from 'src/app/services/concat.service';
import { ErrorService } from 'src/app/services/error.service';
import { ReferenceService } from 'src/app/services/reference.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-reference-home',
  templateUrl: './reference-home.component.html',
  styleUrls: ['./reference-home.component.css']
})
export class ReferenceHomeComponent implements OnInit {

  refOptions!: Observable<ReferenceOption[]>;
  refDetails?: IReference;
  refOutput = "";

  constructor(
    private readonly referenceService: ReferenceService,
    private readonly concatService: ConcatService,
    private readonly errorService: ErrorService
  ) {
    this.refOptions = this.referenceService.getRefOptions().pipe(
      shareReplay(1),
      catchError(err => {
        this.errorService.showError(err.message);
        console.log(err);
        return of(err);
      }),
    );
  }

  ngOnInit(): void {
  }

  getReferenceDetails(selectedOption: ReferenceOption) {
    this.refDetails = undefined;
    this.referenceService.getRefDetails(selectedOption.uuid).subscribe(
      (data: IReference) => this.refDetails = data,
      (err: any) => {
        this.errorService.showError(err.message);
        console.log(err);
      }
    );
  }

  genarateReference(refDetails: IReference) {
    this.refOutput = this.concatService.genarateReference(refDetails);
  }
}

