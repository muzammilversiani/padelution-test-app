import { Component, Input, OnInit } from '@angular/core';
import { IFavoriteItem } from 'src/app/services/interfaces';
import { IonItem, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, CommonModule]
})
export class FavoriteItemComponent  implements OnInit {
  
  @Input() data: IFavoriteItem | undefined;
  @Input() isFirst: boolean = false;

  constructor() { }

  ngOnInit() {}

}
