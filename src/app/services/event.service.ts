import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import {IApiResponse, IEvent} from './interfaces';
import { environment } from 'src/environments/environment';
import {StorageService} from "./storage.service";
import {from} from "rxjs";
import {convertQueryParams} from "./helpers";

const BASE_URL = environment.apiUrl + 'v1/events';
const STORAGE_KEY = 'events';
@Injectable({
  providedIn: 'root',
})
export class EventService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
  }

  getEvents(params: any, force?: boolean): Observable<IApiResponse<IEvent>> {
    if (force) {
      return this.fetchAndStoreEvents(params);
    } else {
      return from(this.storageService.get(STORAGE_KEY)).pipe(
        switchMap((storedEvents) => {
          if (storedEvents) {
            return from([{'data': storedEvents}]);
          } else {
            return this.fetchAndStoreEvents(params);
          }
        }),
        catchError((error) => {
          console.error('Error fetching or retrieving data:', error);
          return from([]);
        })
      );
    }
  }

  private fetchAndStoreEvents(params: any): Observable<IApiResponse<IEvent>> {
    return this.http.get<IApiResponse<IEvent>>(BASE_URL, { params: convertQueryParams(params) }).pipe(
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

  getEvent(slug:string, params:any, force?: boolean): Observable<IEvent> {
    console.log(params);
    if (force) {
      return this.fetchAndStoreEvent(slug, params);
    } else {
      return from(this.storageService.get(STORAGE_KEY + '_' + slug)).pipe(
        switchMap((storedEvent) => {
          if (storedEvent) {
            return from([storedEvent]);
          } else {
            return this.fetchAndStoreEvent(slug, params);
          }
        }),
        catchError((error) => {
          console.error('Error fetching or retrieving data:', error);
          return from([]);
        })
      );
    }
  }

  private fetchAndStoreEvent(slug: string, params: any): Observable<IEvent> {
    console.log(convertQueryParams(params));
    return this.http.get<IEvent>(BASE_URL + '/' + slug, { params: convertQueryParams(params) }).pipe(
      switchMap((response) => {
        return from(this.storageService.set(STORAGE_KEY + '_' + slug, response)).pipe(
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
