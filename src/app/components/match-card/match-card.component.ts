import { Component, Input, OnInit } from '@angular/core';
import { IMatch } from 'src/app/services/interfaces';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
  standalone: true,
  imports: []
})
export class MatchCardComponent  implements OnInit {

  @Input({ required: true }) data: IMatch | undefined;

  constructor() { }

  ngOnInit() {}

}
