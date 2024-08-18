import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader, IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButton, IonTitle, IonContent, IonBackButton, IonList, IonLabel,
    CommonModule, FormsModule, RouterModule]
})
export class PagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
