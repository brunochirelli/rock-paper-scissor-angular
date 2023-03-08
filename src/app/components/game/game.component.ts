import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { StateService } from 'src/app/services/state.service';
import { OptionsEnum } from 'src/app/types/game.types';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  winner$ = this.stateService.winner$;

  constructor(
    private gameService: GameService,
    private stateService: StateService
  ) {}

  setPlayerOption(option: string) {
    console.log(option);
    this.stateService.setPlayer1(option as OptionsEnum);
  }

  play() {
    this.gameService.play();
  }
}
