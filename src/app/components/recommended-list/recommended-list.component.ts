import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RecommendedCardComponent } from '../recommended-card/recommended-card.component';
import { ISuggestedItem } from 'src/app/services/interfaces';

@Component({
  selector: 'app-recommended-list',
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [RecommendedCardComponent]
})
export class RecommendedListComponent  implements OnInit {

  suggestedItems: ISuggestedItem[] = [
    {
      id: 1,
      name: 'Boost Padel League',
      description: 'Boost Sports Club',
      icon: './assets/imgs/ic_trophy_white.svg'
    },
    {
      id: 2,
      name: 'Best Padel League',
      description: 'Padel Sports Arena',
      icon: './assets/imgs/location.svg'
    },
    {
      id: 3,
      name: 'Boost Padel League',
      description: 'Boost Sports Club',
      icon: './assets/imgs/union_sm.svg'
    },
    {
      id: 4,
      name: 'Best Padel League',
      description: 'Padel Sports Arena',
      icon: './assets/imgs/location.svg'
    },
    {
      id: 5,
      name: 'Padel League',
      description: 'Boost Sports Club',
      icon: './assets/imgs/ic_trophy_white.svg'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
