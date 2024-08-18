import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader, IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-americano',
  templateUrl: './americano.page.html',
  styleUrls: ['./americano.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonList, IonLabel,
    CommonModule, FormsModule, RouterModule]
})
export class AmericanoPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('AmericanoPage')
  }

}
