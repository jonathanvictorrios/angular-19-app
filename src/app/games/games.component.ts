import { Component, Input, input, Output, EventEmitter } from '@angular/core';
import { gameDescription } from '../interfaces/gameDescription';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <h3>Los juegos de {{ username }}</h3>
    <ul>
      <!-- track is like identifier in vuejs -->
      @for (game of games.data; track game.id ){
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
    //alert(`A ${this.username} le gusta jugar a ${gameName}`)
  }
  games: gameDescription = {
    data: [
      {
        id: 1,
        name: 'Silent Hill',
        genre: 'Horror',
        year: 1998,
      },
      {
        id: 2,
        name: 'Resident Evil',
        genre: 'Horror',
        year: 1999,
      },
      {
        id: 3,
        name: 'Obscure',
        genre: 'Horror',
        year: 2000,
      },
    ],
  };
}
