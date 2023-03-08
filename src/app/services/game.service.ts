import { Injectable } from '@angular/core';
import { Options, OptionsEnum } from '../types/game.types';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private stateService: StateService) {}

  play() {
    if (this.stateService.player1 === this.stateService.player2) return null;
    if (this.stateService.player1 === (OptionsEnum.rock as unknown))
      return this.stateService.player2 === (OptionsEnum.scissor as unknown);
    if (this.stateService.player1 === (OptionsEnum.scissor as unknown))
      return this.stateService.player2 === (OptionsEnum.paper as unknown);
    if (this.stateService.player1 === (OptionsEnum.paper as unknown))
      return this.stateService.player2 === (OptionsEnum.rock as unknown);
    return null;
  }
}
