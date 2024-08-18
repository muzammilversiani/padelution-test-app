import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import {IonicModule, NavController} from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterLink]
})
export class RegisterPage {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  register() {
    let device_name = 'Web';
    this.authService.register(this.email, this.password, device_name).subscribe(
      data => {
        this.navCtrl.navigateRoot('/tabs', { animated: false });
      },
      error => {
        this.error = 'Registration failed';
      }
    );
  }
}
