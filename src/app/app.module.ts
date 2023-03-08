import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuleComponent } from './components/rule/rule.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [AppComponent, RuleComponent, GameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
