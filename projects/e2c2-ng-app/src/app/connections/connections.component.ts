import { Component, OnInit } from '@angular/core';
import { SharedLibService, ViewType } from 'shared-lib';

@Component({
  selector: 'app-e2c2-connections',
  templateUrl: './connections.component.html',
  styleUrls: []
})
export class ConnectionsComponent implements OnInit{

  public isCreate: boolean = false;
  public isView: boolean = true;
  public viewData: any[] = [];

  constructor(private sharedLibService: SharedLibService) { }

  ngOnInit(): void {
    this.sharedLibService.connections.subscribe((connections) => {
      this.viewData = connections;
    });
    this.sharedLibService.getConnections();
  }

  public onAdd(): void{
    this.isCreate = true;
    this.isView = false;
  }

  public addConnection(connection: any) {
    console.log(connection);
    this.viewData.push(connection);
    this.isCreate = false;
    this.isView = true;
  }

  public get viewType(): typeof ViewType {
    return ViewType;
  }
}
