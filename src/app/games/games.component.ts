import { Component, Input, input, Output, EventEmitter } from '@angular/core';
import { gameDescription } from '../interfaces/gameDescription';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  imports: [CommonModule],
  template: `
    <ul>
      <!-- track is like identifier in vuejs -->
      <li
      *ngFor="let game of games.data"
        [class]="activeGame == game.name ? 'text-violet-700' : ''"
        class='cursor-pointer'
        (mouseover)="
          [fav(game.name), showimage(game.image), selectGame(game.name)]
        "
        (mouseout)="showimage('')"
      >
        {{ game.name }}
      </li>
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  activeGame = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  @Output() addSrcImagenEvent = new EventEmitter<string>();
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
    //alert(`A ${this.username} le gusta jugar a ${gameName}`)
  }
  showimage(srcImage: string) {
    this.addSrcImagenEvent.emit(srcImage);
  }
  selectGame(gameName: string) {
    this.activeGame = gameName;
  }
  games: gameDescription = {
    data: [
      {
        id: 1,
        name: 'Silent Hill 2',
        genre: 'Horror',
        year: 2001,
        image:
          'https://www.thevideogamecompany.com/cdn/shop/products/silent-hill-2-sony-playstation-2-ps2-083717200253-cover-art.jpg',
      },
      {
        id: 2,
        name: 'Resident Evil 4',
        genre: 'Horror',
        year: 2005,
        image:
          'https://pontogame.com/wp-content/uploads/2022/12/Re4portugues-ps2.jpg',
      },
      {
        id: 3,
        name: 'Obscure',
        genre: 'Horror',
        year: 2004,
        image: 'https://media.vandal.net/t200/3547/20047281417_1.jpg',
      },
    ],
  };
}
