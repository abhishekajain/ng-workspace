import { Component, Input } from '@angular/core';
import { SharedLibService, ViewType } from 'shared-lib';

@Component({
  selector: 'lib-view-grid-template',
  templateUrl: './view-grid-template.component.html',
  styleUrls: ['./view-grid-template.component.css']
})
export class ViewGridTemplateComponent {

  constructor(private sharedLibService: SharedLibService) { }

  @Input() viewData: any[];
  @Input() viewTypeInput: ViewType;

  public selected: any;

  public onEdit(obj: any): void{
    this.sharedLibService.editViewObj(obj, this.viewTypeInput);
  }

  public onDelete(obj: any): void{
    this.sharedLibService.deleteViewObj(obj, this.viewTypeInput);
  }

  public get viewType(): typeof ViewType {
    return ViewType;
  }

}
