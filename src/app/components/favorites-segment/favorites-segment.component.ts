import { Component, OnInit } from '@angular/core';
import { IonSearchbar, IonList, IonItem, IonSkeletonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import { FavoriteItemComponent } from '../favorite-item/favorite-item.component';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-favorites-segment',
  templateUrl: './favorites-segment.component.html',
  styleUrls: ['./favorites-segment.component.scss'],
  standalone: true,
  imports: [IonSkeletonText, IonItem, IonList, IonSearchbar, FavoriteItemComponent, SkeletonLoaderComponent]
})
export class FavoritesSegmentComponent  implements OnInit {

  favorites: any;

  constructor() { 
    addIcons({ close });
      this.getFavorites();
  }

  ngOnInit() {
  }

  getFavorites(): void {
    const favorites = {
      events: [
        { 
          type: 'event', 
          icon: './assets/imgs/ic_calendar.svg', 
          event: {
            "id": 3,
            "name": "Tournament X",
            "slug": "tournament-x-2",
            "description": null,
            "start_at": "2024-09-27",
            "start_at_time": null,
            "last_sign_up_at": null,
            "max_participants": null,
            "city": "Helsinki",
            "status": 3,
            "days": 1,
            "created_at": "2024-08-17T13:43:51.000000Z",
            "updated_at": "2024-08-17T13:44:02.000000Z",
            "country": {
                "id": 69,
                "name": "Finland",
                "code": "FI"
            },
            "host": {
              "id": 2,
              "name": "Padel House",
              "username": "padel-house",
              "opened_at": "2024-08-01",
              "type": 1,
              "address": "Fredikanterassi 3 c 140",
              "postal": "00240",
              "city": "Helsinki",
              "neighborhood": null,
              "timezone": "Europe\/Helsinki",
              "courts_inside": 10,
              "courts_outside": 2,
              "courts_total": null,
              "height": null,
              "description": null,
              "contact_email": null,
              "contact_phone": null,
              "contact_website": null,
              "contact_booking_website": null,
              "contact_instagram": null,
              "contact_facebook": null,
              "created_by": 1,
              "created_at": "2024-08-17T08:47:14.000000Z",
              "updated_at": "2024-08-17T08:50:36.000000Z"
            }
          } 
        },
        { 
          type: 'event', 
          icon: './assets/imgs/ic_calendar.svg', 
          event: {
            "id": 3,
            "name": "Tournament X",
            "slug": "tournament-x-2",
            "description": null,
            "start_at": "2024-09-27",
            "start_at_time": null,
            "last_sign_up_at": null,
            "max_participants": null,
            "city": "Helsinki",
            "status": 3,
            "days": 1,
            "created_at": "2024-08-17T13:43:51.000000Z",
            "updated_at": "2024-08-17T13:44:02.000000Z",
            "country": {
                "id": 69,
                "name": "Finland",
                "code": "FI"
            },
            "host": {
              "id": 2,
              "name": "Padel House",
              "username": "padel-house",
              "opened_at": "2024-08-01",
              "type": 1,
              "address": "Fredikanterassi 3 c 140",
              "postal": "00240",
              "city": "Helsinki",
              "neighborhood": null,
              "timezone": "Europe\/Helsinki",
              "courts_inside": 10,
              "courts_outside": 2,
              "courts_total": null,
              "height": null,
              "description": null,
              "contact_email": null,
              "contact_phone": null,
              "contact_website": null,
              "contact_booking_website": null,
              "contact_instagram": null,
              "contact_facebook": null,
              "created_by": 1,
              "created_at": "2024-08-17T08:47:14.000000Z",
              "updated_at": "2024-08-17T08:50:36.000000Z"
            }
          } 
        }
      ],
      rankings: [
        { 
          type: 'ranking', 
          icon: './assets/imgs/ic_ranking.svg',
          ranking: {
            id: 1,
            name: 'Suomen Padelliitto',
            team: 'Miehet'
          } 
        }
      ],
      leagues: [
        { 
          type: 'league', 
          icon: './assets/imgs/ic_trophy_white.svg',
          league: {
            id: 1,
            name: 'Kotone Sport Kesäliiga',
            venue: 'Kotone Sport'
          } 
        }
      ],
      players: [
        {
          type: 'player',
          icon: './assets/imgs/player.jfif',
          player: {
            id: 1,
            name: 'Heikki Lampinen',
            country: {
              id: 1,
              name: 'Finland',
              code: 'fi fi-fi'
            },
            ranking: 24,
            age: 32
          }
        },
        {
          type: 'player',
          icon: './assets/imgs/player.jfif',
          player: {
            id: 2,
            name: 'Robi Ylän',
            country: {
              id: 1,
              name: 'Finland',
              code: 'fi fi-fi'
            },
            ranking: 24,
            age: 28
          }
        }
      ]
    };

    this.favorites = favorites;
  }

}
