import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BodyPart } from '../../app.component';

@Component({
  selector: 'app-defend-menu',
  templateUrl: './defend-menu.component.html',
  styleUrls: ['./defend-menu.component.css']
})
export class DefendMenuComponent {
  @Input() isShowingDefend: boolean = false;
  selectedBodyPart: string[] = [];
  @Input() bodyPart?: BodyPart;
  @Output() onDefendClick = new EventEmitter<void>();
  @Input() isShowingResult: boolean = false;

  bodyParts: { selected: boolean; label: string; selectedCount: number }[] = [
    { label: "Head", selected: false, selectedCount: 0 },
    { label: "Chest", selected: false, selectedCount: 0 },
    { label: "Groin", selected: false, selectedCount: 0 },
    { label: "Legs", selected: false, selectedCount: 0 }
  ];

  selectedCount: number = 0;

  updateSelection(index: number) {
   
    this.bodyParts[index].selectedCount = this.bodyParts[index].selected ? 1 : 0;
    this.selectedCount = this.bodyParts.filter(part => part.selected).length;

    this.selectedBodyPart = this.bodyParts.filter(part => part.selected).map(part => part.label);
  }

  handleDefendClick() {
    this.onDefendClick.emit();
    if (this.selectedBodyPart.length > 0) {
      console.log('Defending these body parts:', this.selectedBodyPart);
    }
  }
}