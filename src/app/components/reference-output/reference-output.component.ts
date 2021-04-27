import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference-output',
  templateUrl: './reference-output.component.html',
  styleUrls: ['./reference-output.component.css']
})
export class ReferenceOutputComponent {

  @Input() refOutput: string = "";
  @Input() example?: string = "";
  
  constructor() { }

  copyToClipboard(refOutput: string): void {
    // This may not work on safari but thats not the end of the world
    function listener(e: any) {
      e.clipboardData.setData("text/html", refOutput);
      e.clipboardData.setData("text/plain", refOutput);
      e.preventDefault();
    }

    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
  }
}
