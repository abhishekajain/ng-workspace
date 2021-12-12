import { Component, Input } from '@angular/core';
import { SharedLibService, ViewType } from 'shared-lib';

@Component({
  selector: 'lib-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.css']
})
export class ViewTemplateComponent {

  constructor(private sharedLibService: SharedLibService) { }

  @Input() viewData: any[];
  @Input() viewTypeInput: ViewType;

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
