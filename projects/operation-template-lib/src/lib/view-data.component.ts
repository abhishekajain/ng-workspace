import { Component, Input } from '@angular/core';
import { ViewType } from 'shared-lib';


@Component({
  selector: 'lib-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent {

  constructor() { }

  @Input() data: any;
  @Input() viewTypeInput: ViewType;

  public get viewType(): typeof ViewType {
    return ViewType;
  }
}
