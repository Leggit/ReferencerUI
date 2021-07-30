import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ReferenceOption } from 'src/app/models/reference-option.model';

@Component({
  selector: 'app-reference-option',
  templateUrl: './reference-option.component.html',
  styleUrls: ['./reference-option.component.css'],
})
export class ReferenceOptionComponent implements OnInit {
  @Output() optionSelected: EventEmitter<ReferenceOption> = new EventEmitter();
  @Input() refOptions: ReferenceOption[] = [];
  filteredRefOptions: ReferenceOption[] = [];
  optionSelect: FormControl = new FormControl();
  invalidSelection = false;

  constructor() {}

  ngOnInit(): void {
    this.filteredRefOptions = this.refOptions
    this.optionSelect.valueChanges.subscribe(
      (value: ReferenceOption | string) => {
        this.filteredRefOptions = this.filterRefOptions(typeof value === 'string' ? value : value.name)
      }
    )
  }

  ngOnChanges(changes?: SimpleChanges): void {
    if (this.refOptions?.length > 0 && changes) {
      this.optionSelect.setValue(this.refOptions[0]);
      this.optionSelect.updateValueAndValidity()
      this.emitSelection(this.refOptions[0]);
    }
  }

  emitSelection(option: ReferenceOption | string): void {
    this.invalidSelection = false;

    if(typeof option === 'string') {
      const filtered = this.filterRefOptions(option)
      const matches = this.refOptions.filter(opt => opt.name === option)
      
      if (matches.length === 1) {
        this.optionSelected.emit(matches[0])
      }
      else if(filtered.length === 1) {
        this.optionSelect.setValue(filtered[0])
        this.optionSelected.emit(filtered[0])
      } else {
        this.invalidSelection = true
      }
    } else {
      this.optionSelected.emit(option);
    }
  }

  filterRefOptions(value: string): ReferenceOption[] {
    console.log("op")
    if(value === "") {
      console.log("VALUE EMPTY")
      return this.refOptions
    }

    const filtered = this.refOptions?.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );

    return filtered?.sort(
      (a, b) => a.name.length - b.name.length
    )
  }

  reset() {
    this.optionSelect.reset("")
  }

  displayFn(option: ReferenceOption): string {
    return option && option.name ? option.name : '';
  }
}
