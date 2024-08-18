import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log('AuthGuard#canActivate called');
    if (this.authService.isAuthenticated()) {
      // console.log('true');
      return true;
    } else {
      // console.log('false');
      this.navCtrl.navigateRoot('/login', { animated: false });
      return false;
    }
  }
}
