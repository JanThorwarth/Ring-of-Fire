import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, PlayerComponent, MatButtonModule, MatDividerModule, MatIconModule, GameInfoComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false
  currentCard: string | undefined = '';
  game!: Game;

  constructor(public dialog: MatDialog ) {}

  ngOnInit(): void {
      this.newGame();
  }
  



  newGame() {
      this.game = new Game();
      console.log(this.game);
      
  }

  takeCard() {
    if(!this.pickCardAnimation) {
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
   
  

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard ?? "")
      this.pickCardAnimation = false
    }, 1000);
    
  }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      this.game.players.push(name)
      
    });



  }

}
