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
import {IChat, IMessage} from "../services/interfaces";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {MessageService} from "../services/message.service";
import {ChatService} from "../services/chat.service";
import {LaravelEchoService} from "../services/laravel-echo.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonFooter, IonTextarea, IonList, IonItem, IonLabel, IonButtons, IonButton, IonAvatar, IonIcon, IonTitle, IonContent, IonBackButton, CommonModule, FormsModule, RouterModule]
})
export class ChatPage implements OnInit {
  private messageService = inject(MessageService);
  private chatService = inject(ChatService);
  // slug string or null
  uuid:string|null = null;
  messages: IMessage[] = [];
  chat: IChat|null = null;
  newMessage:string = '';

  constructor(
    private authService: AuthService,
    private laravelEchoService: LaravelEchoService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    let user = this.authService.currentUserValue;
    // console.log('User:', user);
    if (user) {
      this.laravelEchoService.listenToUserChannel(user.id, (data) => {
        console.log('Received data:', data);

        this.messageService.updateLocalChatsWithNewMessage(data);

        if (data.c_uuid == this.uuid) {
          this.messages.push({
            uuid: data.m.uuid,
            c_uuid: data.c_uuid,
            sender: {
              id: data.u.id,
              name: data.u.name,
            },
            content : data.m.c,
            message_type: data.m.type,
            media_url: data.m.m_url,
            created_at: data.m.at,
            updated_at: data.m.at,
          });
        }
        // Handle the data received
      });
    }

    console.log('ChatPage');
    this.route.paramMap.subscribe(params => {
      this.uuid = params.get('uuid');
      console.log(this.uuid);
      this.loadChat(true);
      this.loadMessages(true);
    });
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

  loadMessages(force = false) {
    const params = {} ;
    this.messageService.getChatMessages(this.uuid || 'null', params, force).subscribe({
      next: (res) => {
        console.log(res);
        this.messages = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  sendMessage() {
    console.log('Send message');
    const params = {
      content: this.newMessage,
      message_type: 1
    };
    this.messageService.createMessage(this.uuid || 'null', params).subscribe({
      next: (res) => {
        // console.log(res);
        this.messages.push(res.data);
        this.newMessage = '';
        // this.loadChat();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
