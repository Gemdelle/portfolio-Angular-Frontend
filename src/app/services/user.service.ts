import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn:boolean = false;

  constructor(private httpClient: HttpClient) { }

  userIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  loginUser(email: string, password: string): Observable<any>{
    return this.httpClient
      .post("https://portfolioap-9gj7.onrender.com/users/login", {email: email, password: password}).pipe(
        map(() => {
          this.isLoggedIn = true;
          return true;
        })
      );
  }

  logoutUser() {
    this.isLoggedIn = false;
  }

}
