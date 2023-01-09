import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() skickaIn!: HTMLInputElement;
  //SKICKA MED INPUT TEXTEN
  @Output() btnClicked = new EventEmitter<string>();

  onClick() {
    this.btnClicked.emit(this.skickaIn.value);
  }
}
