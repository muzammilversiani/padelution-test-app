import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {BehaviorSubject, from, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {GenericOAuth2} from "@capacitor-community/generic-oauth2";
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private apiUrl = environment.apiUrl + 'v1/auth';

  constructor(private http: HttpClient,  private navCtrl: NavController) {
    const userJson = localStorage.getItem('currentUser');
    const currentUser = userJson ? JSON.parse(userJson) : null;
    this.currentUserSubject = new BehaviorSubject<any>(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  login(email: string, password: string, device_name: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login', { email, password, device_name })
      .pipe(map(user => {
        if (user && user.token) {
          console.log(user);
          localStorage.setItem('currentUser', JSON.stringify({'token': user.token}));
          // this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  getUserDetails():Observable<any> {
    // let token = JSON.parse(localStorage.getItem('currentUser')).token ?? '';
    const token: string = JSON.parse(localStorage.getItem('currentUser') ?? '').token ;
    console.log(token);
    return this.http.get<any>(environment.apiUrl + 'v1/users/me').pipe(map(response => {
      console.log(response);
        this.setCurrentUser({
          id: response.id,
          firstname: response['firstname'],
          lastname: response['lastname'],
          profile_photo_url: response['profile_photo_url'],
          elo_rating: response['elo_rating'],
          token: token,
        })
        return response;
      }));
  }

  register(email: string, password: string, device_name: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/register', { email, password, device_name })
      .pipe(map(user => {
        if (user && user.token) {
          console.log(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    this.http.post<any>(environment.apiUrl + 'v1/auth/logout', { }).subscribe({
      next: data => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.navCtrl.navigateRoot('/login', { animated: false });
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  isAuthenticated(): boolean {
    const userJson = localStorage.getItem('currentUser');
    // console.log(userJson);
    if (userJson) {
      const user = JSON.parse(userJson);
      return !!user.token; // check if token exists
    }
    return false;
  }
}
