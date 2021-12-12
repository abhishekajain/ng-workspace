import { Component } from '@angular/core';
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
import { AuthLibService } from 'auth-lib';
import { AppUtilService } from './util/app-util.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'e2c2-ng-app';

  constructor(private authLibService: AuthLibService, private http: HttpClient,
                private router: Router, private appUtilService: AppUtilService) { }

  public authenticated() { return this.authLibService.authenticated; }

  public get user(): any{
    return this.appUtilService.getUser();
  }

  public logout(): void {
  	this.http.post('api/signout', {}).pipe(
          finalize(() => {
            sessionStorage.removeItem('currentUser');
            this.authLibService.authenticated = false;
  	    	  this.router.navigate(['/login']);
          })
      ).subscribe();
  }
}
