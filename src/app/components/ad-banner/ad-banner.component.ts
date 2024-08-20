import { Component, Input, OnInit } from '@angular/core';
import { IAdBanner } from 'src/app/services/interfaces';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
  standalone: true,
  imports: []
})
export class AdBannerComponent  implements OnInit {

  banners: IAdBanner[] = [
    { id: 1, url: 'https://placehold.co/300x250?text=Ad+Banner+1' },
    { id: 2, url: 'https://placehold.co/300x250?text=Ad+Banner+2' },
    { id: 3, url: 'https://placehold.co/300x250?text=Ad+Banner+3' },
  ];
  selectedBanner: IAdBanner | undefined;

  constructor() { }

  ngOnInit() {
    this.selectedBanner = this.banners[Math.floor(Math.random() * this.banners.length)];
  }

  ngOnChanges() {
  }

}
