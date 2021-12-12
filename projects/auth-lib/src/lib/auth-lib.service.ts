import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  public authenticated = false;

  constructor(private http: HttpClient) { }

  public authenticate(credentials, callback): void {
    this.http.post('api/authenticate', credentials).subscribe(
      (response) => {
          response["token"] = "abcd";
          sessionStorage.setItem('currentUser', JSON.stringify(response));
      },
      (error) => {
          this.authenticated = false;
          callback.formSubmitError = true;
      },
      () => {
          this.authenticated = true;
          this.user();
          callback.router.navigate(['/home']);
      }
    );
  }

  public user(): void {
    this.http.get('api/user').subscribe(
      (response) => {
          let currentUser: any = JSON.parse(sessionStorage.getItem('currentUser'));
          currentUser['detail'] = response;
          sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
      },
      (error) => {
      },
      () => {
      }
    );
  }

  public signup(user: any): void {
    this.http.post('api/signup', user).subscribe(
      (response) => {
      },
      (error) => {
      },
      () => {
      }
    );
  }

}
