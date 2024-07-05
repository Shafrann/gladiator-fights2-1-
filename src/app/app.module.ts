import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { StartFightComponent } from './components/start-fight/start-fight.component';
import { LevelMenuComponent } from './components/level-menu/level-menu.component';
import { AttackMenuComponent } from './components/attack-menu/attack-menu.component';
import { DefendMenuComponent } from './components/defend-menu/defend-menu.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    StartFightComponent,
    LevelMenuComponent,
    AttackMenuComponent,
    DefendMenuComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
