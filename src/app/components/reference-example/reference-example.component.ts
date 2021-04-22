import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference-example',
  templateUrl: './reference-example.component.html',
})
export class ReferenceExampleComponent {

  @Input() example: string = "";
  
  constructor() { }
}
