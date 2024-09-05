import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartScreenComponent } from "./start-screen/start-screen.component";
import { GameComponent } from './game/game.component';
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
import { GameInfoComponent } from './game-info/game-info.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartScreenComponent, GameComponent, MatButtonModule, MatDividerModule, MatIconModule, GameInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ringoffire';
}
