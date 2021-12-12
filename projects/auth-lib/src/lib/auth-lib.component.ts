import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthLibService } from './auth-lib.service';
import { Router } from '@angular/router';


@Component({
  selector: 'lib-auth-lib',
  templateUrl: './auth-lib.component.html',
  styleUrls: ['./auth-lib.component.css']
})
export class AuthLibComponent implements OnInit {

  public formSubmitError: boolean = false;
  public loginForm = new FormGroup({
	    username: new FormControl('', Validators.required),
	    password: new FormControl('', Validators.required)
	  }
  );

  constructor(private authLibService: AuthLibService, private router: Router) { }

  ngOnInit(): void {
    if(this.authLibService.authenticated){
      this.router.navigate(['/home']);
    }
  }

  public login(): void{
    this.authLibService.authenticate(this.loginForm.value, this);
  }

}
