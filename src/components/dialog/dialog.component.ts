import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";

@Component({
  selector: 'example-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }
}