import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedLibService, ViewType } from 'shared-lib';
import { FormControlService } from './form-control.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimelineStatusType } from './status.type';
import { FormControlBase } from './form-control-base';

@Component({
  selector: 'lib-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {

  public createState: string = TimelineStatusType.NOT_STARTED;
  public approveState: string = TimelineStatusType.NOT_STARTED;
  public summaryState: string = TimelineStatusType.NOT_STARTED;

  public createFormType: string;
  public viewFormTypes: string[];

  @Input() viewTypeInput: ViewType;
  @Output() newItemEvent = new EventEmitter<any>();

  public viewFormControls: Map<string, FormControlBase<string>[]>;
  public viewFormGroups: Map<string, FormGroup> = new Map<string, FormGroup>();

  constructor(private sharedLibService: SharedLibService,
    private formControlService: FormControlService) { }

  ngOnInit(): void {
    this.viewFormTypes = this.formControlService.getFormTypes(this.viewTypeInput);
    this.createFormType = this.viewFormTypes[0];

    this.viewFormControls = this.formControlService.getViewFormControls(this.viewTypeInput);
    this.viewFormControls.forEach((value: FormControlBase<string>[], key: string) => {
        this.viewFormGroups.set(key, this.formControlService.toFormGroup(value));
    });
  }

  public create(viewFormGroupKey: string): void{
    console.log(viewFormGroupKey);
    console.log(this.viewFormGroups.get(viewFormGroupKey).value);
    this.createState = TimelineStatusType.SUCCESS;
    this.approveState = TimelineStatusType.CURRENT;
  }

  public backFromApprove(viewFormGroupKey: string): void{
    console.log(viewFormGroupKey);
    console.log(this.viewFormGroups.get(viewFormGroupKey).value);
    this.createState = TimelineStatusType.CURRENT;
    this.approveState = TimelineStatusType.NOT_STARTED;
  }

  public createStart(): void{
    this.createState = TimelineStatusType.CURRENT;
  }

  public approve(viewFormGroupKey: string): void{
    console.log(viewFormGroupKey);
    console.log(this.viewFormGroups.get(viewFormGroupKey).value);
    this.createState = TimelineStatusType.SUCCESS;
    this.approveState = TimelineStatusType.SUCCESS;
    this.summaryState = TimelineStatusType.CURRENT;
    this.sharedLibService.createViewObj(this.viewFormGroups.get(viewFormGroupKey).value, this.viewTypeInput, viewFormGroupKey);
  }

  public done(viewFormGroupKey: string): void{
    console.log(viewFormGroupKey);
    console.log(this.viewFormGroups.get(viewFormGroupKey).value);
    this.createState = TimelineStatusType.SUCCESS;
    this.approveState = TimelineStatusType.SUCCESS;
    this.summaryState = TimelineStatusType.SUCCESS;
    this.newItemEvent.emit(this.viewFormGroups.get(viewFormGroupKey).value);
  }

  public get timelineStatusType(): typeof TimelineStatusType {
    return TimelineStatusType;
  }
}
