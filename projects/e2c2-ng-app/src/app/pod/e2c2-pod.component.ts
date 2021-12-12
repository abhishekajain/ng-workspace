import { Component, OnInit } from '@angular/core';
import { SharedLibService, ViewType } from 'shared-lib';

@Component({
  selector: 'app-e2c2-pod',
  templateUrl: './e2c2-pod.component.html',
  styleUrls: []
})
export class E2C2PODComponent implements OnInit{

  public isCreate: boolean = false;
  public isView: boolean = true;
  public viewData: any[] = [];

  constructor(private sharedLibService: SharedLibService) { }

  ngOnInit(): void {
    this.sharedLibService.e2c2pods.subscribe((e2c2Pods) => {
      this.viewData = e2c2Pods;
    });
    this.sharedLibService.getE2C2Pods();
  }

  public onAdd(): void{
    this.isCreate = true;
    this.isView = false;
  }

  public addPod(e2c2Pod: any) {
    console.log(e2c2Pod);
    this.viewData.push(e2c2Pod);
    this.isCreate = false;
    this.isView = true;
  }

  public get viewType(): typeof ViewType {
    return ViewType;
  }
}
