import { Component, OnInit, OnDestroy } from '@angular/core';
import {IonApp, IonRouterOutlet, Platform} from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import {LaravelEchoService} from "./services/laravel-echo.service";
import {StorageService} from "./services/storage.service";
import {AuthService} from "./services/auth.service";

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Platform-specific initialization code if needed
    });
  }

  ngOnInit() {
    // this.laravelEchoService.connect();

  }

  ngOnDestroy() {
    // this.laravelEchoService.disconnect();
  }
}
