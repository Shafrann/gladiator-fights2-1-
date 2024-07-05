import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

export interface Character {
  name: string;
  currentHealth: number;
  maxHealth: number;
  healthColor: string,
  imageUrl: string,
  skills: Skill
}

export interface Skill {
  level: number,
  strength: number;
  agility: number;
  stamina: number;
}

export interface BodyPart{
  head:string,
  chest:string,
  groin:string,
  legs:string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gladiator-fights2';
  character: Character = {
    name: 'Player 1',
    currentHealth: 66,
    maxHealth: 120,
    imageUrl: './../assets/player2_icon.jpeg',
    healthColor: '',
    skills: {
      level: 1,
      strength: 15,
      agility: 5,
      stamina: 3
    }
  };
  character1: Character = {
    name: 'Player 2',
    currentHealth: 66,
    maxHealth: 120,
    imageUrl: './../assets/player1_icon.jpeg',
    healthColor: '',
    skills: {
      level: 1,
      strength: 15,
      agility: 5,
      stamina: 3
    }
  };

 


  isPlaying: boolean = false;
  isShowingCharacter1 = false;
  isShowingLevels: boolean = true;
  isShowingAttack: boolean = false;
  isShowingDefend: boolean = false;
  isShowingResult: boolean = false;
  handleFightClick() {
    this.isShowingCharacter1 = true;
    this.isPlaying = true;
    this.isShowingLevels = false;
    this.isShowingAttack = true;
  }

  handleAttackClick() {
    this.isShowingAttack = false;
    this.isShowingDefend = true;
    console.log("Attack clicked");
  }


  
  handleDefendClick() {
    this.isShowingDefend = false;
    this.isShowingResult = !this.isShowingResult;
    console.log("Defend clicked");
    
  }

  bodyPart:BodyPart={
    head:"head",
    chest:"chest",
    groin:"groin",
    legs:"legs",
  };
  

}
