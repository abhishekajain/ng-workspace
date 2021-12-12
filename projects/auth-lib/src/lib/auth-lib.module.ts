import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { SignUpComponent } from './sign-up.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AuthLibComponent, SignUpComponent],
  imports: [
  	CommonModule,
  	ClarityModule,
  	FormsModule,
  	ReactiveFormsModule
  ],
  exports: [AuthLibComponent, SignUpComponent]
})
export class AuthLibModule { }
