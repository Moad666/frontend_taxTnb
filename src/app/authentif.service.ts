import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentifService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  checkLoginStatus() {
    this.loggedIn.next(true);
  }

  constructor(private httpClient : HttpClient, private router : Router) { }

  private baseUrll = "http://localhost:8080/auth";
  //private baseUrl2 = "http://localhost:8080/proprietaire";

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.httpClient.post(`${this.baseUrl}/login`, loginData, { responseType: 'text' })
      .pipe(
        map(response => {
          if (response.includes('Request triggered successfully!')) {
            console.log('Login successful');
            this.checkLoginStatus();
            this.router.navigate(['/home']);
            return { success: true };
          } else {
            return { success: false };
          }
        }),
        catchError(error => {
          console.error('Login failed', error);
          return throwError(error);
        })
      );
  }










  private baseUrl = "http://localhost:8081/auth";

}
