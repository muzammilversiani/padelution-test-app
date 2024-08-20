import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slides',
  templateUrl: './home-slides.component.html',
  styleUrls: ['./home-slides.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: []
})
export class HomeSlidesComponent  implements OnInit {

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

  constructor() { }

  ngOnInit() {}

}
