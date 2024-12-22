import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { GamesComponent } from './games/games.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, CommentsComponent, GamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  srcGameImage = 'https://www.thevideogamecompany.com/cdn/shop/products/silent-hill-2-sony-playstation-2-ps2-083717200253-cover-art.jpg';
  setSrcImage(srcImage: string) {
    this.srcGameImage = srcImage;
  }
}
