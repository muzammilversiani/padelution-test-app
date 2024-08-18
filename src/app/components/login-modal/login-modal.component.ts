import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NavController} from "@ionic/angular";
import {
  IonButton,
  IonButtons, IonContent,
  IonHeader, IonInput,
  IonItem, IonLabel, IonList,
  IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-login-modal',
  standalone: true,
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonItem, IonInput, IonContent,
    IonList,IonLabel,
    CommonModule, FormsModule, RouterModule
  ]
})
export class LoginModalComponent  implements OnInit {

  email: string = 'hesesses@gmail.com';
  password: string = '';
  error: string = '';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  login() {
    let device_name = 'Web';
    this.authService.login(this.email, this.password, device_name).subscribe({
      next: data => {
        this.authService.getUserDetails().subscribe({
          next: data => {
            console.log("redirecting to /tabs/home");
            console.log("dismiss modal");
            this.modalController.dismiss();
            this.navCtrl.navigateRoot('/tabs/home');
          }
        })
      },
      error: error => {
        console.log(error);
      }
    });
  }

  close() {
    return this.modalController.dismiss(null, 'cancel');
  }
}
