import { Component, Input, input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
  <h3>Los juegos de {{username}}</h3>
    <ul>
      @for (game of games; track game.id){
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
    //alert(`A ${this.username} le gusta jugar a ${gameName}`)
  }
  games = [
    {
      id:1,
      name:'Silent Hill'
    },
    {
      id:2,
      name:'Resident Evil'
    },
    {
      id:3,
      name:'Obscure'
    },

  ]
}
