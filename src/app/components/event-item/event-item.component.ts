import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/services/interfaces';
import { IonItem, IonLabel } from "@ionic/angular/standalone";
import * as moment from 'moment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, CommonModule]
})
export class EventItemComponent  implements OnInit {

  @Input({ required: true }) event: IEvent | undefined;
  @Input() isLast: boolean = false;
  dates: string[] = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    this.dates = [];
    if( this.event?.days == 1 ) {
      this.dates.push(moment(this.event?.start_at).format('DD'));
    } else {
      let i = 1;
      let date = moment(this.event?.start_at);
      do {
        this.dates.push(date.format('DD'));
        date.add(1, 'day');
        i++;
      } while ( i <= this.event?.days! );
    }
  }

}
