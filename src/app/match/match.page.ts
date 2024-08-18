import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem, IonLabel,
  IonList, IonModal,
  IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {RouterModule} from "@angular/router";
import {EnterMatchResultsComponent} from "../components/enter-match-results/enter-match-results.component";

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonBackButton, IonList, IonLabel,
    IonModal, IonItem,
    CommonModule, FormsModule, RouterModule]
})
export class MatchPage implements OnInit {

  @ViewChild('page') page: ElementRef | undefined;

  constructor(
    private modalController: ModalController,
  ) {

  }

  ngOnInit() {
  }

  async openModal() {
    console.log(this.page || 'no page');
    const modal = await this.modalController.create({
      component: EnterMatchResultsComponent,
      componentProps: {
        matchId: 123,
      },
      presentingElement: this.page?.nativeElement,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log(data, role);
  }
}
