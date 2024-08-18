import { Component, OnInit } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons, IonChip, IonCol,
  IonContent, IonFooter, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonRow,
  IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-event-participants',
  standalone: true,
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton, IonSegment,
    IonSegmentButton, IonLabel,IonIcon,IonList, IonItem, IonItemGroup, IonItemDivider, IonGrid, IonRow, IonCol,
    IonFooter,IonTabs, IonTabBar, IonTabButton, IonChip,
    CommonModule, FormsModule
  ]
})
export class EventParticipantsComponent  implements OnInit {

  slug:string|null = null;
  selectedTab:string = 'participants';
  selectedSub:string = 'miehet-a';

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.selectedTab = 'participants'
      this.selectedSub = params.get('sub') || 'miehet-a';
    });
  }

  changeSub(event:any) {
    this.selectedSub = event.detail.value;
    let basePath = this.router.url.split('/').slice(0, 3).join('/');
    this.location.go(basePath + `/events/${this.slug}/${this.selectedTab}/${this.selectedSub}`);
  }

}
