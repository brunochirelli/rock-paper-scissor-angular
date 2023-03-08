import { Injectable } from '@angular/core';
import { OptionsEnum } from '../types/game.types';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private stateService: StateService) {}

  play() {
    this.getPlayer2Option();

    const player1 = this.stateService.player1.getValue();
    const player2 = this.stateService.player2.getValue();

    let result;

    if (player1 === player2) result = null;

    if (player1 === OptionsEnum.rock) result = player2 === OptionsEnum.scissor;
    if (player1 === OptionsEnum.scissor) result = player2 === OptionsEnum.paper;
    if (player1 === OptionsEnum.paper) result = player2 === OptionsEnum.rock;

    console.log('PLAYER 1', player1);
    console.log('PLAYER 2', player2);
    console.log('RESULT', result || null);

    this.stateService.setResult(!!result);
  }

  getPlayer2Option() {
    const options = Object.keys(OptionsEnum);
    const randomIndex = Math.floor(Math.random() * options.length);
    const option: OptionsEnum = options[randomIndex] as OptionsEnum;
    this.stateService.setPlayer2(OptionsEnum[option]);
  }
}
