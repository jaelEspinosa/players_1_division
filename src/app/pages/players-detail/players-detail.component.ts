import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { playersList } from './../../shared/consts/players';
@Component({
  selector: 'app-players-detail',
  templateUrl: './players-detail.component.html',
  styleUrls: ['./players-detail.component.scss']
})
export class PlayersDetailComponent implements OnInit {
  player:any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


   this.route.paramMap.subscribe(params =>{
    const playerID = Number(params.get("PlayerID"));
     console.log('esta es la id', playerID);
    this.player =  playersList.find((singlePlayer: any) => playerID === singlePlayer.id)
   })
     console.log(this.player)
  }

}
