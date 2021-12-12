import { Component, OnInit } from '@angular/core';
import { SharedLibService, ViewType } from 'shared-lib';

@Component({
  selector: 'app-e2c2-persons',
  templateUrl: './persons.component.html',
  styleUrls: []
})
export class PersonsComponent implements OnInit{

  public isCreate: boolean = false;
  public isView: boolean = true;
  public viewData: any[] = [];

  constructor(private sharedLibService: SharedLibService) { }

  ngOnInit(): void {
    this.sharedLibService.persons.subscribe((persons) => {
      this.viewData = persons;
    });
    this.sharedLibService.getPersons();
  }

  public onAdd(): void{
    this.isCreate = true;
    this.isView = false;
  }

  public addPerson(connection: any) {
    console.log(connection);
    this.viewData.push(connection);
    this.isCreate = false;
    this.isView = true;
  }

  public get viewType(): typeof ViewType {
    return ViewType;
  }
}
