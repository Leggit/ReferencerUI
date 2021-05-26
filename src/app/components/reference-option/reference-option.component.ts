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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceOptionComponent implements OnInit {
  @Output() optionSelected: EventEmitter<ReferenceOption> = new EventEmitter();
  @Input() refOptions: ReferenceOption[] = [];
  filteredRefOptions!: Observable<ReferenceOption[]>;
  optionSelect: FormControl = new FormControl();
  invalidSelection = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredRefOptions = this.optionSelect.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterRefOptions(value.name ? value.name : value))
    );

    if (this.refOptions?.length > 0) {
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
        this.optionSelected.emit(filtered[0])
      } else {
        this.invalidSelection = true
      }
    } else {
      this.optionSelected.emit(option);
    }
  }

  filterRefOptions(value: string): ReferenceOption[] {
    const filtered = this.refOptions?.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );

    return filtered.sort(
      (a, b) => a.name.length - b.name.length
    )
  }

  displayFn(option: ReferenceOption): string {
    return option && option.name ? option.name : '';
  }
}
