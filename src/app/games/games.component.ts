import { Component, Input, input, Output, EventEmitter } from '@angular/core';
import { gameDescription } from '../interfaces/gameDescription';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <ul>
      <!-- track is like identifier in vuejs -->
      @for (game of games.data; track game.id ){
      <li (mouseover)="[fav(game.name),showimage(game.image)]">{{ game.name }}</li>
      }

    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  @Output() addSrcImagenEvent = new EventEmitter<string>();
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
    //alert(`A ${this.username} le gusta jugar a ${gameName}`)
  }
  showimage(srcImage:string){
    this.addSrcImagenEvent.emit(srcImage);
  }
  games: gameDescription = {
    data: [
      {
        id: 1,
        name: 'Silent Hill 2',
        genre: 'Horror',
        year: 2001,
        image:'https://www.thevideogamecompany.com/cdn/shop/products/silent-hill-2-sony-playstation-2-ps2-083717200253-cover-art.jpg'
      },
      {
        id: 2,
        name: 'Resident Evil 4',
        genre: 'Horror',
        year: 2005,
        image:'https://pontogame.com/wp-content/uploads/2022/12/Re4portugues-ps2.jpg'
      },
      {
        id: 3,
        name: 'Obscure',
        genre: 'Horror',
        year: 2004,
        image:'https://media.vandal.net/t200/3547/20047281417_1.jpg'
      },
    ],
  };
}
