import Echo from 'laravel-echo';
import axios from 'axios';

import Pusher from 'pusher-js';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

declare global {
  interface Window {
    Pusher: any;
    Echo: any;
  }
}
@Injectable({
  providedIn: 'root',
})
export class LaravelEchoService {
  constructor(private authService: AuthService) {
    let user = this.authService.currentUserValue;
    console.log(user.token);
    window.Pusher = Pusher;
    // window.axios = axios;
    window.Echo = new Echo({
      broadcaster: 'pusher',
      authEndpoint: environment.pusher.authUrl,
      auth: {
        withCredentials: true,
        headers: {
          Authorization: 'Bearer ' + user.token,
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded'
        }

      },
      key: environment.pusher.key,
      wsHost: 'realtime-pusher.ably.io',
      wsPort: 443,
      // disableStats: true,
      encrypted: true,
      cluster: 'eu',
      authorizer: (channel:any) => {
        return {
          authorize: (socketId:any, callback:any) => {
            axios({
              method: "post",
              url: environment.pusher.authUrl,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + user.token,
              },
              data: {
                socket_id: socketId,
                channel_name: channel.name,
              },
            })
              .then(response => {
                callback(false, response.data);
              })
              .catch(error => {
                callback(true, 'error');
              });
          }
        };
      },
    });

  }


  public listenToUserChannel(userId: string, callback: (data: any) => void) {
    console.log("Listening to user channel");

    // window.Echo.channel('testing').listen('.ChatMessage', (data: any) => {
    //   console.log('Received data:', data);
    //   callback(data);
    // });

    window.Echo.private(`users.${userId}`).listen('.ChatMessage', (data: any) => {
      // console.log('Received data:', data);
      callback(data);
    });
  }

  public disconnect() {
    window.Echo.disconnect();
  }
}
