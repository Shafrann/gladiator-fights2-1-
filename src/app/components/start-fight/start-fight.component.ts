import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-start-fight',
  templateUrl: './start-fight.component.html',
  styleUrl: './start-fight.component.css'
})
export class StartFightComponent {
  @Output() onFightClick = new EventEmitter<void>();

  handleFightClick() {
    this.onFightClick.emit();
  }
}
