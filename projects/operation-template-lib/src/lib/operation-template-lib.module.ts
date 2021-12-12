import { NgModule } from '@angular/core';
import { ViewTemplateComponent } from './view-template.component';
import { ViewDataComponent } from './view-data.component';
import { ViewGridTemplateComponent } from './view-grid-template.component';
import { ViewGridDataComponent } from './view-grid-data.component';
import { ViewGridColComponent } from './view-grid-col.component';
import { CreateTemplateComponent } from './create-template.component';
import { DynamicFormControlComponent } from './dynamic-form-control.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ViewTemplateComponent, ViewDataComponent,
  ViewGridTemplateComponent, ViewGridDataComponent, ViewGridColComponent,
  CreateTemplateComponent, DynamicFormControlComponent],
  imports: [
  	CommonModule,
  	ClarityModule,
  	FormsModule,
  	ReactiveFormsModule
  ],
  exports: [ViewTemplateComponent, ViewGridTemplateComponent, CreateTemplateComponent]
})
export class OperationTemplateLibModule { }
