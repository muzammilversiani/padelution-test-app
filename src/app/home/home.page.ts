import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from "@angular/router";
import {
  IonActionSheet,
  IonBackButton,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent, IonFab, IonFabButton, IonFabList,
  IonHeader, IonIcon, IonLabel,
  IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import {add, navigate, chevronUpCircle} from "ionicons/icons";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {EnterMatchResultsComponent} from "../components/enter-match-results/enter-match-results.component";
import {ChangeLocationComponent} from "../components/change-location/change-location.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFab, IonFabButton, IonFabList, IonActionSheet, IonHeader, IonToolbar, IonButtons, IonButton, IonLabel, IonIcon, IonTitle, IonContent, IonBackButton
    , CommonModule, FormsModule, RouterModule]
})
export class HomePage implements OnInit {
  @ViewChild('page') page: ElementRef | undefined;
  isCreateMenuOpen = false;
  public createMenuButtons = [
    {
      text: 'Match',
      data: {
        action: 'mixmatch',
      },
    },
    {
      text: 'Americano',
      data: {
        action: 'americano',
      },
    },
    {
      text: 'Event',
      data: {
        action: 'event',
      },
    },
    {
      text: 'Share Padelution',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  constructor(
    private router: Router,
    private modalController: ModalController,
    ) {
    addIcons({ add, navigate, chevronUpCircle });
  }

  ngOnInit() {
  }

  async openChangeLocationModal() {
    console.log(this.page || 'no page');
    const modal = await this.modalController.create({
      component: ChangeLocationComponent,
      componentProps: {
        // matchId: 123123,
      },
      presentingElement: this.page?.nativeElement,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log(data, role);
  }

  async openModal() {
    console.log(this.page || 'no page');
    const modal = await this.modalController.create({
      component: EnterMatchResultsComponent,
      componentProps: {
        matchId: 123123,
      },
      presentingElement: this.page?.nativeElement,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log(data, role);
  }

  createMenuResult(ev: any) {
    this.isCreateMenuOpen = false;
    console.log('createMenuResult', ev.detail);
    if (!ev.detail.data) {
      return;
    }

    switch (ev.detail.data.action) {
      case 'mixmatch':
        this.router.navigate(['/match/create'])
        break;
      case 'americano':
        this.router.navigate(['/tabs/matches'])
        break;
      case 'event':
        this.router.navigate(['/events'])
        break;

    }
  }

}
