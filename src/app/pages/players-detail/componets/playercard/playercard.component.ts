import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playercard',
  templateUrl: './playercard.component.html',
  styleUrls: ['./playercard.component.scss']
})
export class PlayercardComponent implements OnInit {
@Input() player!:any
  constructor() { }

  ngOnInit(): void {
  }

}
