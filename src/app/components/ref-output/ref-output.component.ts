import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ref-output',
  templateUrl: './ref-output.component.html',
  styleUrls: ['./ref-output.component.css']
})
export class RefOutputComponent {

  @Input() refOutput: string = "";

  constructor() { }
}
