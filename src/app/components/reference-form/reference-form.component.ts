import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  filteredRefOptions: Observable<RefOption[]>;
  refOutput = "";
  optionSelect: FormControl;

  constructor(private referenceService: ReferenceService) { 
    this.optionSelect = new FormControl();
    this.filteredRefOptions = this.optionSelect.valueChanges.pipe(
      startWith(""),
      map(value => this.filterRefType(value.name ? value.name : value))
    );
  }

  ngOnInit(): void {
    this.referenceService.getRefOptions().subscribe(
      (data: RefOptions) => this.refOptions = data.options,
      (err: any) => console.log(err),
      () => this.optionSelect.setValue(this.refOptions[0])
    )
  }

  displayOption(option: RefOption): string {
    return option.name;
  }

  filterRefType(value: string): RefOption[] {
    console.log(value);
    return this.refOptions.filter(option => option.name.toLowerCase().includes(value.toLowerCase()));
  }
}

