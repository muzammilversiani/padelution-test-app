import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons, IonChip, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonImg, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonModal, IonRow,
  IonTitle,
  IonRefresher,
  IonToolbar, IonRefresherContent
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {flag, globe, home, person, tennisball} from "ionicons/icons";
import { EventService } from '../services/event.service';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import {IApiResponse, IEvent} from "../services/interfaces";

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonRefresher, IonRefresherContent, IonContent, IonBackButton, IonButtons, IonButton, IonModal,
    IonList, IonItem, IonAvatar, IonImg, IonLabel, IonIcon, IonItemGroup, IonItemDivider, IonGrid, IonRow, IonCol, IonChip
    , CommonModule, FormsModule, RouterModule]
})
export class EventsPage implements OnInit {
  private eventService = inject(EventService);

  presentingElement: HTMLElement | null = null;

  events: IEvent[] = [];
  public isLoading = true;
  public error = null;
  refresher:any = null;
  constructor(
  ) {
    addIcons({ flag });
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page2');
    this.loadEvents();
  }

  handleRefresh(refresher:any) {
    this.refresher = refresher;
    this.loadEvents(true);
  }

  loadEvents(force = false) {
    const params = { sort: '-start_at' };
    this.eventService.getEvents(params, force).subscribe({
        next: (res) => {
          console.log(res);
          this.events = res.data;
          this.refresher?.target.complete();
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
