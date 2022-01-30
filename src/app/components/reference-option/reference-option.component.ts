import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReferenceOption } from 'src/app/models/reference-option.model';
import {Observable} from 'rxjs';
import {shareReplay, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-reference-option[refOptions]',
  templateUrl: './reference-option.component.html',
  styleUrls: ['./reference-option.component.css'],
})
export class ReferenceOptionComponent implements OnInit {
  @Output() optionSelected: EventEmitter<ReferenceOption> = new EventEmitter();
  @Input() refOptions!: Observable<ReferenceOption[]>;
  optionSelect: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
    this.refOptions.pipe(
      take(1),
      tap(options => {
        this.optionSelect.setValue(options[0]);
        this.onSelectionChange();
      }),
    ).subscribe();
  }

  onSelectionChange() {
    this.optionSelected.emit(this.optionSelect.value)
  }

  reset() {
    this.optionSelect.reset(null)
  }
}
