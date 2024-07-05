import { Component, Input } from '@angular/core';
import { Character } from '../../app.component';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  @Input() character?:Character

}
