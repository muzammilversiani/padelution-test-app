import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonSkeletonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  standalone: true,
  imports: [IonSkeletonText, IonLabel, IonItem, ]
})
export class SkeletonLoaderComponent  implements OnInit {

	@Input() type: string = 'favorite-item';

  constructor() { }

  ngOnInit() {}

}
