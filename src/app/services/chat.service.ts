import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import {IChatApiSingleResponse, IChat, IChatApiCollectionResponse} from './interfaces';
import { environment } from 'src/environments/environment';
import {StorageService} from "./storage.service";
import {from} from "rxjs";
import {convertQueryParams} from "./helpers";

const BASE_URL = environment.chatApiUrl + 'v1/chats';
const STORAGE_KEY = 'chats';
@Injectable({
  providedIn: 'root',
})
export class ChatService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
  }

  getChats(params: any, force?: boolean): Observable<IChatApiCollectionResponse<IChat>> {
    if (force) {
      return this.fetchAndStoreChats(params);
    } else {
      return from(this.storageService.get(STORAGE_KEY)).pipe(
        switchMap((storedEvents) => {
          if (storedEvents) {
            return from([{'data': storedEvents}]);
          } else {
            return this.fetchAndStoreChats(params);
          }
        }),
        catchError((error) => {
          console.error('Error fetching or retrieving data:', error);
          return from([]);
        })
      );
    }
  }

  private fetchAndStoreChats(params: any): Observable<IChatApiCollectionResponse<IChat>> {
    return this.http.get<IChatApiCollectionResponse<IChat>>(BASE_URL, { params: convertQueryParams(params) }).pipe(
      switchMap((response) => {
        return from(this.storageService.set(STORAGE_KEY, response.data)).pipe(
          map(() => response)
        );
      }),
      catchError((error) => {
        console.error('Error fetching JSON data:', error);
        return from([]);
      })
    );
  }

  getChat(uuid:string, params:any, force?: boolean): Observable<IChatApiSingleResponse<IChat>> {
    console.log(params);
    if (force) {
      return this.fetchAndStoreChat(uuid, params);
    } else {
      return from(this.storageService.get(STORAGE_KEY + '_' + uuid)).pipe(
        switchMap((storedEvent) => {
          if (storedEvent) {
            return from([{'data': storedEvent}]);
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

  private fetchAndStoreChat(uuid: string, params: any): Observable<IChatApiSingleResponse<IChat>> {
    console.log(convertQueryParams(params));
    return this.http.get<IChatApiSingleResponse<IChat>>(BASE_URL + '/' + uuid, { params: convertQueryParams(params) }).pipe(
      switchMap((response) => {
        return from(this.storageService.set(STORAGE_KEY + '_' + uuid, response.data)).pipe(
          map(() => response)
        );
      }),
      catchError((error) => {
        console.error('Error fetching JSON data:', error);
        return from([]);
      })
    );
  }

  createChat(params:any): Observable<IChat> {
    console.log(params);
    return this.http.post<IChat>(BASE_URL, { ...params }).pipe(
      switchMap((response) => {
        return from(this.storageService.set(STORAGE_KEY + '_' + response.uuid, response)).pipe(
          map(() => response)
        );
      }),
      catchError((error) => {
        console.error('Error fetching JSON data:', error);
        return from([]);
      })
    );
  }

}
