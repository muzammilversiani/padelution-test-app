import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons, IonContent,
  IonHeader, IonInput,
  IonItem, IonLabel, IonList,
  IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-change-location',
  standalone: true,
  templateUrl: './change-location.component.html',
  styleUrls: ['./change-location.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonItem, IonInput, IonContent,
    IonList,IonLabel,
    CommonModule, FormsModule, RouterModule
  ]
})
export class ChangeLocationComponent  implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('change location');
  }

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalController.dismiss("new location id", 'confirm');
  }

}
