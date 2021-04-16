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
      this.optionSelect.setValue(this.refOptions[0]?.name);
      this.emitSelection(this.refOptions[0].name);
    }
  }

  emitSelection(option: string): void {
    this.invalidSelection = false;

    // If there are reference options with duplicate names this method will be problematic
    const selected = this.refOptions?.filter(
      (opt) => opt.name.toLowerCase() === option?.toLowerCase()
    );

    if (selected?.length === 1) {
      this.optionSelected.emit(selected[0]);
    } else {
      this.invalidSelection = true;
    }
  }

  filterRefOptions(value: string): ReferenceOption[] {
    return this.refOptions?.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
  }
}
