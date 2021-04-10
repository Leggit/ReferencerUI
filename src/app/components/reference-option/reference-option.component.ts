import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RefOption, RefOptions } from 'src/app/models/ref-option.model';

@Component({
  selector: 'app-reference-option',
  templateUrl: './reference-option.component.html',
  styleUrls: ['./reference-option.component.css'],
})
export class ReferenceOptionComponent implements OnInit {
  @Output() optionSelected: EventEmitter<RefOption> = new EventEmitter();
  @Input() refOptions: RefOption[] = [];
  filteredRefOptions!: Observable<RefOption[]>;
  optionSelect!: FormControl;
  invalidSelection = false;

  constructor() { }

  ngOnInit(): void {
    this.optionSelect = new FormControl();

    this.filteredRefOptions = this.optionSelect.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterRefType(value.name ? value.name : value))
    );

    this.optionSelect.setValue(this.refOptions[0].name);
  }

  emitSelection(option: string): void {
    this.invalidSelection = false;

    // Filter down to the selected option
    // If the data from the server has duplicates this method will be problematic
    var selected = this.refOptions.filter(
      (opt) => opt.name.toLowerCase() === option.toLowerCase()
    );

    if (selected.length === 1) {
      this.optionSelected.emit(selected[0]);
    } else {
      this.invalidSelection = true;
    }

  }

  filterRefType(value: string): RefOption[] {
    return this.refOptions.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
  }
}
