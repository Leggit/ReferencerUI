import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ref-output',
  templateUrl: './ref-output.component.html',
  styleUrls: ['./ref-output.component.css']
})
export class RefOutputComponent {

  @Input() refOutput: string = "";
  
  constructor() { }

  copyToClipboard(refOutput: string): void {
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
