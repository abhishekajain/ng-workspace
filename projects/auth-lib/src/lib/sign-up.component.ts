import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthLibService } from './auth-lib.service';
import { Router } from '@angular/router';


@Component({
  selector: 'lib-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public formSubmitError: boolean = false;
  public signUpForm = new FormGroup({
	    username: new FormControl('', Validators.required),
	    password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),

	  }
  );

  constructor(private authLibService: AuthLibService, private router: Router) { }

  ngOnInit(): void {

  }

  public signup(): void{
    this.authLibService.signup(this.signUpForm.value);
  }

}
