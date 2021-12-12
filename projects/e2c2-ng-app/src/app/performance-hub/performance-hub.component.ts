import { Component, OnInit } from '@angular/core';
import { SharedLibService, ViewType } from 'shared-lib';

@Component({
  selector: 'app-performance-hub',
  templateUrl: './performance-hub.component.html',
  styleUrls: []
})
export class PerformanceHubComponent implements OnInit{

  public isCreate: boolean = false;
  public isView: boolean = true;
  public viewData: any[] = [];

  constructor(private sharedLibService: SharedLibService) { }

  ngOnInit(): void {
    this.sharedLibService.performancehubs.subscribe((performancehubs) => {
      this.viewData = performancehubs;
    });
    this.sharedLibService.getPerformanceHub();
  }

  public onAdd(): void{
    this.isCreate = true;
    this.isView = false;
  }

  public addPerformanceHub(performanceHub: any) {
    this.viewData.push(performanceHub);
    this.isCreate = false;
    this.isView = true;
  }

  public get viewType(): typeof ViewType {
    return ViewType;
  }
}
