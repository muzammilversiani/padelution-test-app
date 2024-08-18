import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import {NavController} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";
import {LoginModalComponent} from "../components/login-modal/login-modal.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonTitle, IonToolbar, IonContent, IonButton, IonText,
    CommonModule, FormsModule, RouterLink]

})
export class LoginPage {
  @ViewChild('page') page: ElementRef | undefined;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private modalController: ModalController,
  ) { }

  async openLoginModal() {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      presentingElement: this.page?.nativeElement,
    });
    return await modal.present();
  }


}
