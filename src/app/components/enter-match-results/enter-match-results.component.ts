import {Component, Input, OnInit} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-enter-match-results',
  standalone: true,
  templateUrl: './enter-match-results.component.html',
  styleUrls: ['./enter-match-results.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonItem, IonInput, IonContent,
    CommonModule, FormsModule, RouterModule
  ]
})
export class EnterMatchResultsComponent  implements OnInit {
  @Input() matchId: number | undefined;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.matchId);
  }

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalController.dismiss(this.matchId, 'confirm');
  }
}
