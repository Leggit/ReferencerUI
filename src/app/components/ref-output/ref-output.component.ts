import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ref-output',
  templateUrl: './ref-output.component.html',
  styleUrls: ['./ref-output.component.css']
})
export class RefOutputComponent {

  @Input() refOutput: string = "";
  
  constructor() { }

  copyToClipboard(refOutput: string): void {
    // Bit of a shame that the angular cdk copy and paste wasnt working with the em formatting
    // This may not work on safari but thats not the end of the world
    // Potentially a security problem?
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
