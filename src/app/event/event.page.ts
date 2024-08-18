import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {
  IonBackButton,
  IonButtons, IonCol,
  IonContent, IonFooter, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonRow,
  IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { playCircle, radio, library, search } from 'ionicons/icons';
import { EventInfoComponent} from "./event-info/event-info.component";
import {EventParticipantsComponent} from "./event-participants/event-participants.component";
import {ParallaxHeaderDirective} from "../directives/parallax-header.directive";
import {EventService} from "../services/event.service";
import {IEvent} from "../services/interfaces";

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonSegment,
    IonSegmentButton, IonLabel,IonIcon,IonList, IonItem, IonItemGroup, IonItemDivider, IonGrid, IonRow, IonCol,
    IonFooter,IonTabs, IonTabBar, IonTabButton, EventInfoComponent, EventParticipantsComponent,
    CommonModule, FormsModule, RouterModule, ParallaxHeaderDirective
  ]
})
export class EventPage implements OnInit {
  private eventService = inject(EventService);

  event: IEvent|null = null;
  // slug string or null
  slug:string|null = null;
  selectedTab:string = 'info';
  selectedSub:string|null = '';
  refresher:any = null;
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private location: Location,
  ) {
    addIcons({ playCircle, radio, library, search });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.selectedTab = params.get('tab') || 'info'
      this.selectedSub = params.get('sub');

      this.loadEvent();
    });
  }

  handleRefresh(refresher:any) {
    this.refresher = refresher;
    this.loadEvent(true);
  }

  loadEvent(force = false) {
    const params = {} ;
    this.eventService.getEvent(this.slug || 'null', params, force).subscribe({
      next: (res) => {
        console.log(res);
        this.event = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete:() => {
        this.refresher?.target.complete();
      }
    })
  }


  changeTab(event:any) {
    this.selectedTab = event.detail.value;
    console.log(this.route);
    console.log(this.router);
    let basePath = this.router.url.split('/').slice(0, 3).join('/');
    console.log(basePath);
    // this.location.go(`${this.selectedTab}`);
    this.location.go(basePath +`/events/${this.slug}/${this.selectedTab}`);
  }

}
