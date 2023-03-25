import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() classButton: string = '';
  @Input() isDisabled: boolean = false;

  @Output() buttonClick = new EventEmitter();

  onButtonClick(): void{
    this.buttonClick.emit({title: this.title, icon: this.icon});
  }

}
