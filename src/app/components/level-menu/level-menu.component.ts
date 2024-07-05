import { Component , Input ,Output,EventEmitter} from '@angular/core';
import {Skill} from "./../../app.component"

@Component({
  selector: 'app-level-menu',
  templateUrl: './level-menu.component.html',
  styleUrl: './level-menu.component.css'
})
export class LevelMenuComponent {


  @Input()
   skills: Skill = {
    strength: 2,
    agility: 2,
    stamina: 2,
    level: 1,
  };

  isShowingLevels:boolean=true;
  
  @Output() onFightClick = new EventEmitter<void>();

  handleFightClick() {
    this.onFightClick.emit();
    
  }
}
