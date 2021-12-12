import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ViewType } from './model';

const CUST_SITE_ROUTE: string = "apiv2/customerSiteRoute";
const POD_ROUTER_INTERFACE: string = "apiv2/e2c2PodRouterInterface";
const CONNECTIONS: string = "apiv2/connections";

const VPC_CONNECTION: string = "api/vpcconnection";
const SITE_CONNECTION: string = "api/siteconnection";
const USER: string = "api/person";
const CUSTOMER: string = 'api/signup';
const E2C2_POD: string = 'api/e2c2pod';
const GRPC_E2C2_POD: string = 'api/grpc/e2c2pod';
const PERF_HUB: string = 'api/performancehub';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  private _routes: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public routes: Observable<any[]> = this._routes.asObservable();

  private _loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loader: Observable<boolean> = this._loader.asObservable();

  private _connections: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public connections: Observable<any[]> = this._connections.asObservable();

  private _persons: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public persons: Observable<any[]> = this._persons.asObservable();

  private _e2c2pods: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public e2c2pods: Observable<any[]> = this._e2c2pods.asObservable();

  private _performancehubs: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public performancehubs: Observable<any[]> = this._performancehubs.asObservable();

  constructor(private http: HttpClient) { }

  public getRoutes(username?: any): void{
  	this._loader.next(true);
	  let siteObservar = this.http.get(CUST_SITE_ROUTE);
	  let routerObserver = this.http.get(POD_ROUTER_INTERFACE);

	  let observable = forkJoin([siteObservar, routerObserver]);

    observable.pipe(finalize(() => {
      this._loader.next(false);
    })).subscribe(
      (response) =>{
        this._routes.next(response);
      }
    );
  }

  public getConnections(username?: any): void{
  	this._loader.next(true);
  	let fakeObservar = this.http.get(CONNECTIONS);
	  let vpcObservar = this.http.get(VPC_CONNECTION);
	  let siteObservar = this.http.get(SITE_CONNECTION);

	  let observable = forkJoin([fakeObservar, vpcObservar, siteObservar]);

    observable.pipe(finalize(() => {
      this._loader.next(false);
    })).subscribe(
      (response) =>{
        let result: any[] = <any[]>response[0];
        result.concat(<any[]>response[1]);
        result.concat(<any[]>response[2]);
        this._connections.next(result);
      }
    );
  }

  public createCustomer(username?: any, customer?: any): void{
  	this._loader.next(true);
  	customer.role = 'CUSTOMER';
	  let customerObservar = this.http.post(CUSTOMER, customer);

	  let observable = forkJoin([customerObservar]);

	  observable.pipe(finalize(() => {
		  this._loader.next(false);
    })).subscribe(
      (response) =>{
        console.log(response);
      }
    );
  }

  public deleteCustomer(username?: any, customer?: any): void{
  	this._loader.next(true);
  	let selfUrl = customer._links.self.href;
	  let customerObservar = this.http.delete(selfUrl.substring(selfUrl.indexOf('/api/'),selfUrl.length));

	  let observable = forkJoin([customerObservar]);

	  observable.pipe(finalize(() => {
		  this._loader.next(false);
    })).subscribe(
      (response) =>{
        console.log(response);
      }
    );
  }

  public createConnections(username?: any, connection?: any): void{
  	this._loader.next(true);
	  let vpcObservar = this.http.post(VPC_CONNECTION, connection);
	  let siteObservar = this.http.post(SITE_CONNECTION, connection);

	  let observable = forkJoin([vpcObservar, siteObservar]);

	  observable.pipe(finalize(() => {
		  this._loader.next(false);
    })).subscribe(
      (response) =>{
        console.log(response);
      }
    );
  }

  public deleteViewObj(viewObj: any, viewType: ViewType){
    console.log(viewObj);
    console.log(viewType);
    switch (viewType) {
      case ViewType.CONNECTION:
        break;
      case ViewType.CUSTOMER:
        this.deleteCustomer(null, viewObj);
        break;
      case ViewType.E2C2POD:
        this.deletePod(null, viewObj);
        break;
      default:
        break;
    }
  }

  public editViewObj(viewObj: any, viewType: ViewType){
    console.log(viewObj);
    console.log(viewType);
  }

  public createViewObj(viewObj: any, viewType: ViewType, viewSubType: string){
    console.log(viewObj);
    console.log(viewType);
    console.log(viewSubType);
    switch (viewType) {
      case ViewType.CONNECTION:
        break;
      case ViewType.CUSTOMER:
        this.createCustomer(null, viewObj);
        break;
      case ViewType.E2C2POD:
        this.createPod(null, viewObj);
        break;
      default:
        break;
    }
  }

  public getPersons(username?: any): void{
  	this._loader.next(true);
  	let fakeObservar = this.http.get(USER);

	  let observable = forkJoin([fakeObservar]);

    observable.pipe(finalize(() => {
      this._loader.next(false);
    })).subscribe(
      (response) =>{
        console.log(response[0]);
        let result: any[] = <any[]>response[0]['_embedded']['person'];
        this._persons.next(result);
      }
    );
  }

  public getE2C2Pods(username?: any): void{
  	this._loader.next(true);
  	let podObservar = this.http.get(E2C2_POD);

	  let observable = forkJoin([podObservar]);

    observable.pipe(finalize(() => {
      this._loader.next(false);
    })).subscribe(
      (response) =>{
        console.log(response[0]);
        let result: any[] = <any[]>response[0]['_embedded']['e2c2pod'];
        this._e2c2pods.next(result);
      }
    );
  }

  public createPod(username?: any, pod?: any): void{
  	this._loader.next(true);
	  let postObservar = this.http.post(GRPC_E2C2_POD, pod);

	  let observable = forkJoin([postObservar]);

	  observable.pipe(finalize(() => {
		  this._loader.next(false);
    })).subscribe(
      (response) =>{
        console.log(response);
      }
    );
  }

  public deletePod(username?: any, pod?: any): void{
  	this._loader.next(true);
  	let selfUrl = pod._links.self.href;
	  let deleteObservar = this.http.delete(selfUrl.substring(selfUrl.indexOf('/api/'),selfUrl.length));

	  let observable = forkJoin([deleteObservar]);

	  observable.pipe(finalize(() => {
		  this._loader.next(false);
    })).subscribe(
      (response) =>{
        console.log(response);
      }
    );
  }

    public getPerformanceHub(username?: any): void{
    	this._loader.next(true);
    	let phubObservar = this.http.get(PERF_HUB);

  	  let observable = forkJoin([phubObservar]);

      observable.pipe(finalize(() => {
        this._loader.next(false);
      })).subscribe(
        (response) =>{
          let result: any[] = <any[]>response[0]['_embedded']['performancehub'];
          this._performancehubs.next(result);
        }
      );
    }
}
