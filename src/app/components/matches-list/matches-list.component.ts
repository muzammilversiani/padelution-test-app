import { Component, OnInit } from '@angular/core';
import { MatchCardComponent } from '../match-card/match-card.component';
import { IMatch } from 'src/app/services/interfaces';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss'],
  standalone: true,
  imports: [MatchCardComponent]
})
export class MatchesListComponent  implements OnInit {

  matches: IMatch[] = [
    {
      id: 1,
      date: '3.7.2024, 14:30',
      court: 'Court North 1',
      league: {
        id: 1,
        name: 'Cupra Finnish Padel Tour #3 KUOPIO + Kansalliset kilpailut MC/NC - Miehet FPT',
        type: 'Miehet FPT',
        venue: 'Padel Sawo ry, Finland',
      },
      team1: {
        id: 1,
        player1: {
          id: 1,
          name: 'Heikki Lampinen',
          country: {
            id: 1,
            name: 'Finland',
            code: 'fi fi-fi'
          },
          ranking: 24
        },
        player2: {
          id: 2,
          name: 'Robi Ylän',
          country: {
            id: 1,
            name: 'Finland',
            code: 'fi fi-fi'
          },
          ranking: 24
        },
      },
      team2: {
        id: 2,
        player1: {
          id: 3,
          name: 'Masi Sarpola',
          country: {
            id: 1,
            name: 'Finland',
            code: 'fi fi-fi'
          },
          ranking: 24
        },
        player2: {
          id: 4,
          name: 'Immo Laukkanen',
          country: {
            id: 1,
            name: 'Finland',
            code: 'fi fi-fi'
          },
          ranking: 24
        },
      }
    },
    {
      id: 2,
      date: '3.7.2024, 14:30',
      court: 'Court North 1',
      league: {
        id: 2,
        name: 'Max Match',
        type: null,
        venue: null,
      },
      team1: {
        id: 3,
        player1: {
          id: 6,
          name: 'Heikki Lampinen',
          country: {
            id: 1,
            name: 'Finland',
            code: 'fi fi-fi'
          },
          ranking: 24
        },
        player2: {
          id: 7,
          name: 'Robi Ylän',
          country: {
            id: 1,
            name: 'Finland',
            code: 'fi fi-fi'
          },
          ranking: 24
        },
      },
      team2: {
        id: 4,
        player1: {
          id: 8,
          name: 'Masi Sarpola',
          country: {
            id: 1,
            name: 'Finland',
            code: 'fi fi-fi'
          },
          ranking: 24
        },
        player2: {
          id: 9,
          name: 'Immo Laukkanen',
          country: {
            id: 1,
            name: 'Finland',
            code: 'fi fi-fi'
          },
          ranking: 24
        },
      }
    }
  ];

  constructor() { }

  ngOnInit() {}

}
