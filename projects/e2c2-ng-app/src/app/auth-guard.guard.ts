import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthLibService } from 'auth-lib';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router, private authLibService: AuthLibService) {  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (sessionStorage.getItem('currentUser')) {        
        this.authLibService.authenticated = true;        
    }

    let isAuth: boolean = this.authLibService.authenticated;
    if(!isAuth){
    	this.router.navigate(['/login']);
    }
    return isAuth;
  }
  
}
