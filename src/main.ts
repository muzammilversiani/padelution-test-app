import {enableProdMode, importProvidersFrom} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import {IonicStorageModule} from "@ionic/storage-angular";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {accessTokenInterceptor} from "./app/interceptors/access-token.interceptor";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(
      {
      backButtonText: ' ',
      rippleEffect: false,
      mode: 'ios',}),
    importProvidersFrom(IonicStorageModule.forRoot()),
    provideHttpClient(withInterceptors([accessTokenInterceptor])),
    provideRouter(routes),
  ],
});
