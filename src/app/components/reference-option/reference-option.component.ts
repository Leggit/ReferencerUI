import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  optionSelect: FormControl = new FormControl();

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  onSelectionChange() {
    this.optionSelected.emit(this.optionSelect.value)
  }

  reset() {
    this.optionSelect.reset("")
  }
}
