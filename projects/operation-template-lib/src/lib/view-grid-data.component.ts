import { Component, Input } from '@angular/core';
import { ViewType } from 'shared-lib';


@Component({
  selector: 'lib-view-grid-data',
  templateUrl: './view-grid-data.component.html'
})
export class ViewGridDataComponent {

  constructor() { }

  @Input() data: any;
  @Input() viewTypeInput: ViewType;

  public get viewType(): typeof ViewType {
    return ViewType;
  }
}
