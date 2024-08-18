import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {
  IonAvatar,
  IonBackButton, IonBadge, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonLabel,
  IonList, IonRefresher, IonRefresherContent,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {ChatService} from "../services/chat.service";
import {IChat} from "../services/interfaces";
import { addIcons } from 'ionicons';
import {add, navigate, chevronUpCircle} from "ionicons/icons";
import {LaravelEchoService} from "../services/laravel-echo.service";
import {AuthService} from "../services/auth.service";
import {MessageService} from "../services/message.service";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonRefresher, IonRefresherContent, IonButtons, IonBadge, IonButton, IonAvatar, IonIcon, IonTitle, IonContent, IonBackButton, IonList, IonLabel,
    CommonModule, FormsModule, RouterModule]
})
export class ChatsPage implements OnInit {
  private chatService = inject(ChatService);
  public env = environment;
  presentingElement: HTMLElement | null = null;

  chats: IChat[] = [];
  public isLoading = true;
  public error = null;
  refresher:any = null;
  constructor(
    private authService: AuthService,
    private laravelEchoService: LaravelEchoService,
    private messageService: MessageService,
  ) {
    addIcons({ add, navigate, chevronUpCircle });
  }

  ngOnInit() {
    let user = this.authService.currentUserValue;
    // console.log('User:', user);
    if (user) {
      this.laravelEchoService.listenToUserChannel(user.id, (data) => {
        console.log('Received data:', data);
        this.messageService.updateLocalChatsWithNewMessage(data);
        this.loadChats();
        // Handle the data received
      });
    }
    console.log('ChatsPage');
    this.presentingElement = document.querySelector('.ion-page2');
    // this.loadChats();
  }

  ionViewWillEnter() {
    console.log("viewWillEnter")
    this.loadChats();
  }

  handleRefresh(refresher:any) {
    this.refresher = refresher;
    this.loadChats(true);
  }

  loadChats(force = false) {
    const params = { };
    this.chatService.getChats(params, force).subscribe({
      next: (res) => {
        this.chats = res.data;
        console.log(this.chats);
        this.refresher?.target.complete();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  createChat() {
    let data = {
      type: 1,
      participants: ['hese','Niko']
    }
    this.chatService.createChat(data).subscribe({
      next: (res) => {
        console.log(res);
        this.loadChats(true);
      }
    });
    console.log('createChat');
  }

}
