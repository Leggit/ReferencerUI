import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from "rxjs/operators"

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.css']
})
export class ReferenceFormComponent implements OnInit {

  refTypes: string[] = ["Web", "Book"];
  filteredRefTypes: Observable<string[]>;

  typeSelection: FormControl;

  constructor() { 
    this.typeSelection = new FormControl();
    this.filteredRefTypes = this.typeSelection.valueChanges.pipe(
      startWith(""),
      map(value => this.filterRefType(value))
    );
  }

  ngOnInit(): void {
  }

  filterRefType(value: string): string[] {
    return this.refTypes.filter(type => type.toLowerCase().includes(value.toLowerCase()));
  }
}

