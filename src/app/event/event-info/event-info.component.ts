import { Component, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButtons, IonChip, IonCol,
  IonContent, IonFooter, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonRow,
  IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-event-info',
  standalone: true,
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonSegment,
    IonSegmentButton, IonLabel,IonIcon,IonList, IonItem, IonItemGroup, IonItemDivider, IonGrid, IonRow, IonCol,
    IonFooter,IonTabs, IonTabBar, IonTabButton, IonChip,
    RouterModule, CommonModule
  ]
})
export class EventInfoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
