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

  @Input({ required: true }) banners: IAdBanner[] = [];
  selectedBanner: IAdBanner | undefined;

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    if( this.banners.length > 0 ) {
      this.selectedBanner = this.banners[Math.floor(Math.random() * this.banners.length)];
    }
  }

}
