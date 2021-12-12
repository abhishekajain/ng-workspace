import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  constructor() { }

  public getUser(): any {
    let currentUser: any = JSON.parse(sessionStorage.getItem('currentUser'));
    let user: any = {};
    user.name = currentUser.detail.name;
    user.authority = currentUser.detail.authorities[0].authority;
    return user;
  }
}
