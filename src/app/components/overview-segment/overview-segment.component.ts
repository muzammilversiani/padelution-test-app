import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatchCardComponent } from '../match-card/match-card.component';
import { IAdBanner } from 'src/app/services/interfaces';
import { AdBannerComponent } from '../ad-banner/ad-banner.component'
import { EventsListComponent } from '../events-list/events-list.component';
import { MatchesListComponent } from '../matches-list/matches-list.component';
import { RecommendedListComponent } from '../recommended-list/recommended-list.component';

@Component({
  selector: 'app-overview-segment',
  templateUrl: './overview-segment.component.html',
  styleUrls: ['./overview-segment.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatchCardComponent, AdBannerComponent, EventsListComponent, MatchesListComponent, RecommendedListComponent],
})
export class OverviewSegmentComponent  implements OnInit {

  slides: any[] = [
    {
      id: 1,
      icon: './assets/imgs/ic_trophy.svg',
      title: 'Padeljunkies Invitational',
      description: 'Padeljunkies Invitational 2.0 pelataan Vaasan Padel X Klemettilässä kolmipäiväsenä joukkuetapahtumana...',
      image: './assets/imgs/slide1.jfif'
    },
    {
      id: 2,
      icon: './assets/imgs/ic_trophy.svg',
      title: 'Summer Games 2024',
      description: 'Summer Games 2024 pelataan Vaasan Padel X Klemettilässä kolmipäiväsenä joukkuetapahtumana...',
      image: 'https://picsum.photos/id/191/500/300'
    },
    {
      id: 3,
      icon: './assets/imgs/ic_trophy.svg',
      title: 'Padeljunkies Invitational',
      description: 'Padeljunkies Invitational 2.0 pelataan Vaasan Padel X Klemettilässä kolmipäiväsenä joukkuetapahtumana...',
      image: 'https://picsum.photos/id/192/500/300'
    },
    {
      id: 4,
      icon: './assets/imgs/ic_trophy.svg',
      title: 'Padeljunkies Invitational',
      description: 'Padeljunkies Invitational 2.0 pelataan Vaasan Padel X Klemettilässä kolmipäiväsenä joukkuetapahtumana...',
      image: 'https://picsum.photos/id/193/500/300'
    },
  ];

  banners: IAdBanner[] = [
    { id: 1, url: 'https://placehold.co/300x250?text=Ad+Banner+1' },
    { id: 2, url: 'https://placehold.co/300x250?text=Ad+Banner+2' },
    { id: 3, url: 'https://placehold.co/300x250?text=Ad+Banner+3' },
  ];

  constructor() {
    
  }

  ngOnInit() {}

}
