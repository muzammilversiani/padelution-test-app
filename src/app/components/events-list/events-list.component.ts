import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { IApiResponse, IEvent } from 'src/app/services/interfaces';
import { IonList, IonItem, IonLabel } from "@ionic/angular/standalone";
import { EventItemComponent } from '../event-item/event-item.component';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, EventItemComponent, SkeletonLoaderComponent]
})
export class EventsListComponent  implements OnInit {

  events: IEvent[] = [];
  isLoading: boolean = true;

  constructor(private eventService: EventService) { 
    this.eventService.getEvents({ sort: '-start_at' }, true).subscribe({
      next: (response: IApiResponse<IEvent>) => {
        this.events = response.data;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      }
    })
  }

  ngOnInit() {}

}
