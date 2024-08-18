import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {
  IonBackButton,
  IonButtons, IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonLabel, IonList, IonListHeader, IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton,
    IonGrid, IonRow, IonCol, CommonModule, FormsModule, RouterModule,
    IonList, IonLabel, IonListHeader
  ]
})
export class DiscoverPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
