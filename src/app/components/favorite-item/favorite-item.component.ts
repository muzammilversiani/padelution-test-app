import { Component, Input, OnInit } from '@angular/core';
import { IFavoriteItem } from 'src/app/services/interfaces';
import { IonItem, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonItem, CommonModule]
})
export class FavoriteItemComponent  implements OnInit {
  
  @Input() data: IFavoriteItem | undefined;
  @Input() isFirst: boolean = false;

  constructor() { 
    addIcons({ star });
  }

  ngOnInit() {}

}
