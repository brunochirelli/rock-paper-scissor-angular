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
  winner = new BehaviorSubject<string>('');

  result$ = this.result.asObservable();
  winner$ = this.winner.asObservable();

  constructor() {
    this.result$.subscribe((result) => {
      this.setWinner(result);
    });

    this.winner$.subscribe((winner) => {
      console.log('Winner', winner);
    });
  }

  setPlayer1(player1: OptionsEnum) {
    this.player1.next(player1);
  }

  setPlayer2(player2: OptionsEnum) {
    this.player2.next(player2);
  }

  setResult(result: boolean | null) {
    this.result.next(result);
  }

  setWinner(winner: boolean | null) {
    const winnerText =
      winner === true ? 'Player 1' : winner === false ? 'Player 2' : 'Empate';

    this.winner.next(winnerText);
  }
}
