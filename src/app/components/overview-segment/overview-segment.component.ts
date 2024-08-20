import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatchCardComponent } from '../match-card/match-card.component';
import { AdBannerComponent } from '../ad-banner/ad-banner.component'
import { EventsListComponent } from '../events-list/events-list.component';
import { MatchesListComponent } from '../matches-list/matches-list.component';
import { RecommendedListComponent } from '../recommended-list/recommended-list.component';
import { HomeSlidesComponent } from '../home-slides/home-slides.component';

@Component({
  selector: 'app-overview-segment',
  templateUrl: './overview-segment.component.html',
  styleUrls: ['./overview-segment.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatchCardComponent, AdBannerComponent, EventsListComponent, MatchesListComponent, RecommendedListComponent, HomeSlidesComponent],
})
export class OverviewSegmentComponent  implements OnInit {

  constructor() {}

  ngOnInit() {}

}
