import { NgModule } from '@angular/core';
import { DashboardLibComponent } from './dashboard-lib.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DashboardLibComponent],
  imports: [
  	CommonModule,  	
  	ClarityModule
  ],
  exports: [DashboardLibComponent]
})
export class DashboardLibModule { }
