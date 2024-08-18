import { Component, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButton, IonButtons, IonTitle, IonContent, IonBackButton, RouterLink
    ]
})
export class PagesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
