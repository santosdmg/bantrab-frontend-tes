import { Component, Input } from '@angular/core';

@Component({
  selector: 'control-messages',
  template: `<div *ngIf="errorMessage !== null"><div class="form-error"><p class="error-text">{{errorMessage}}</p></div></div>`
})
export class ControlMessagesComponent {
  @Input() control: any= null;

  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors[propertyName] && (this.control.touched)) {
        return 'Campo requerido';
      }
    }

    return null;
  }
}
