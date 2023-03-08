import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OptionsEnum } from '../types/game.types';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  // Talvez uma regra seja, toda variável dentro do store deva ser um behavior
  // subject para podermos se inscrever nesse valor
  player1 = new BehaviorSubject<OptionsEnum | null>(null);
  player2 = new BehaviorSubject<OptionsEnum | null>(null);
  result = new BehaviorSubject<boolean | null>(null);

  constructor() {}

  setPlayer1(player1: OptionsEnum) {
    this.player1.next(player1);
  }

  setPlayer2(player2: OptionsEnum) {
    this.player2.next(player2);
  }

  setResult(result: boolean | null) {
    this.result.next(result);
  }
}
