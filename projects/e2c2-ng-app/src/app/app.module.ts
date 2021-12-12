import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConnectionsComponent } from './connections/connections.component';
import { SignupComponent } from './user/signup.component';
import { SigninComponent } from './user/signin.component';
import { PersonsComponent } from './user/persons.component';

import { E2C2PODComponent } from './pod/e2c2-pod.component';
import { PerformanceHubComponent } from './performance-hub/performance-hub.component';

import { AuthGuardGuard } from './auth-guard.guard';

import { DashboardLibModule, DashboardLibComponent } from 'dashboard-lib';
import { AuthLibModule } from 'auth-lib';
import { VpcLibModule } from 'vpc-lib';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperationTemplateLibModule } from 'operation-template-lib';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
        return next.handle(request.clone({
            setHeaders: {
                Authorization: `Bearer ${currentUser.token}`,
                'X-Requested-With': 'XMLHttpRequest'
            }
        }));
      }
      else{
        return next.handle(request.clone({
            setHeaders: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }));
      }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConnectionsComponent,
    PersonsComponent,
    SigninComponent,
    SignupComponent,
    E2C2PODComponent,
    PerformanceHubComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    OperationTemplateLibModule,
    AuthLibModule,
    RouterModule.forRoot([
      {path: 'home', component: DashboardLibComponent, canActivate: [AuthGuardGuard]},
      {path: 'connections', component: ConnectionsComponent, canActivate: [AuthGuardGuard]},
      {path: 'customers', component: PersonsComponent, canActivate: [AuthGuardGuard]},
      {path: 'pods', component: E2C2PODComponent, canActivate: [AuthGuardGuard]},
      {path: 'phub', component: PerformanceHubComponent, canActivate: [AuthGuardGuard]},
      {path: 'login', component: SigninComponent},
      {path: 'signup', component: SignupComponent, canActivate: [AuthGuardGuard]},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardLibModule,
    VpcLibModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
