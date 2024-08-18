import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import {IChatApiCollectionResponse, IChatApiSingleResponse, IMessage} from './interfaces';
import { environment } from 'src/environments/environment';
import {StorageService} from "./storage.service";
import {from} from "rxjs";
import {convertQueryParams} from "./helpers";

const BASE_URL = environment.chatApiUrl + 'v1/chats';
const STORAGE_KEY = 'chats';
@Injectable({
  providedIn: 'root',
})
export class MessageService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
  }

  getChatMessages(uuid:string, params:any, force?: boolean): Observable<IChatApiCollectionResponse<IMessage>> {
    console.log(params);
    if (force) {
      return this.fetchAndStoreChat(uuid, params);
    } else {
      return from(this.storageService.get(STORAGE_KEY + '_' + uuid + '_messages')).pipe(
        switchMap((storedEvent) => {
          if (storedEvent) {
            return from([storedEvent]);
          } else {
            return this.fetchAndStoreChat(uuid, params);
          }
        }),
        catchError((error) => {
          console.error('Error fetching or retrieving data:', error);
          return from([]);
        })
      );
    }
  }

  private fetchAndStoreChat(uuid: string, params: any): Observable<IChatApiCollectionResponse<IMessage>> {
    console.log(convertQueryParams(params));
    return this.http.get<IChatApiCollectionResponse<IMessage>>(BASE_URL + '/' + uuid + '/messages', { params: convertQueryParams(params) }).pipe(
      switchMap((response) => {
        console.log(response);
        return from(this.storageService.set(STORAGE_KEY + '_' + uuid + '_messages', response.data)).pipe(
          map(() => response)
        );
      }),
      catchError((error) => {
        console.error('Error fetching JSON data:', error);
        return from([]);
      })
    );
  }


  createMessage(uuid:string, params:any): Observable<IChatApiSingleResponse<IMessage>> {
    // console.log(params);
    return this.http.post<IChatApiSingleResponse<IMessage>>(BASE_URL+ '/' + uuid + '/messages', { ...params }).pipe(
      catchError((error) => {
        console.error('Error fetching JSON data:', error);
        return from([]);
      })
    );
  }

  /*
  * Update local chats timestamp and last_message with a new message.
  * chats listing will be sorted by updated_at timestamp and shows the last message.
  * This is used from chats and chat/id pages.
   */
  updateLocalChatsWithNewMessage(message: any) {
    console.log(message);
    this.storageService.get(STORAGE_KEY).then((chats) => {
      console.log(chats);
      let updatedChats = chats.map((chat:any) => {
        console.log(chat, message.c_uuid, chat.uuid === message.c_uuid);
        if (chat.uuid === message.c_uuid) {
          chat['last_message'] = message;
          chat['updated_at'] = message.updated_at;
        }
        return chat;
      }).sort(function(a:any, b:any) {
        console.log(new Date(a.updated_at).getTime(), new Date(b.updated_at).getTime());
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
      console.log(updatedChats);

      this.storageService.set(STORAGE_KEY, updatedChats);
    });
  }

}
