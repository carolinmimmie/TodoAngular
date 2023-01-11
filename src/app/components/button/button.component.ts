import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonText!: string;
  @Input() sendInput!: HTMLInputElement;
  @Output() btnClicked = new EventEmitter<string>();

  onClick() {
    this.btnClicked.emit(this.sendInput.value);
  }
}
