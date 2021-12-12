import { NgModule } from '@angular/core';
import { VpcLibComponent } from './vpc-lib.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [VpcLibComponent],
  imports: [
  	ClarityModule
  ],
  exports: [VpcLibComponent]
})
export class VpcLibModule { }
