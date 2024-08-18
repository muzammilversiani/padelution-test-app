import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTextarea,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {IChat, IMessage} from "../../services/interfaces";
import {ChatService} from "../../services/chat.service";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.page.html',
  styleUrls: ['./chat-info.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonFooter, IonTextarea, IonList, IonItem, IonLabel, IonButtons, IonButton, IonAvatar, IonIcon, IonTitle, IonContent, IonBackButton, CommonModule, FormsModule, RouterModule]
})
export class ChatInfoPage implements OnInit {

  uuid:string|null = null;
  participants: any = [];
  chat: IChat|null = null;
  constructor(
    private route : ActivatedRoute,
    private chatService: ChatService,
    private authService: AuthService,
  ) {



    this.route.paramMap.subscribe(params => {
      this.uuid = params.get('uuid');
      console.log(this.uuid);
      this.loadChat();
    });
  }

  ngOnInit() {
    let user = this.authService.currentUserValue;
  }

  loadChat(force = false) {
    const params = {} ;
    this.chatService.getChat(this.uuid || 'null', params, force).subscribe({
      next: (res) => {
        console.log(res);
        this.chat = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
