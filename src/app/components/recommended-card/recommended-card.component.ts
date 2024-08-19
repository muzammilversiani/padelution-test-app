import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { starOutline } from 'ionicons/icons';
import { ISuggestedItem } from 'src/app/services/interfaces';

@Component({
  selector: 'app-recommended-card',
  templateUrl: './recommended-card.component.html',
  styleUrls: ['./recommended-card.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonIcon, IonButton, ]
})
export class RecommendedCardComponent  implements OnInit {

  @Input() item: ISuggestedItem | undefined;

  constructor() { 
    addIcons({ starOutline });
  }

  ngOnInit() {}

}
