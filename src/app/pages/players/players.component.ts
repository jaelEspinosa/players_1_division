import { playersList } from './../../shared/consts/players';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public  players = playersList;

  constructor() { }

  ngOnInit(): void {
  }

}
