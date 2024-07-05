import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BodyPart } from '../../app.component';


@Component({
  selector: 'app-attack-menu',
  templateUrl: './attack-menu.component.html',
  styleUrl: './attack-menu.component.css',
})
export class AttackMenuComponent {
  @Input() isShowingAttack: boolean = true;
  @Input() bodyPart?: BodyPart;

  selectedBodyPart: string = '';

  bodyParts = [
    { label: 'Head', value: 'Head' },
    { label: 'Chest', value: 'Chest' },
    { label: 'Groin', value: 'Groin' },
    { label: 'Legs', value: 'Legs' }
  ];

  @Output() onAttackClick = new EventEmitter<string>();

  handleAttackClick() {
    this.onAttackClick.emit(this.selectedBodyPart);
    console.log(this.selectedBodyPart)
  }
}