import { Component, Input } from '@angular/core';
import { ViewType } from 'shared-lib';


@Component({
  selector: 'lib-view-grid-col',
  templateUrl: './view-grid-col.component.html'
})
export class ViewGridColComponent {

  constructor() { }

  @Input() viewTypeInput: ViewType;

  public get viewType(): typeof ViewType {
    return ViewType;
  }
}
