import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private loginService: LoginService,
              private router: Router, private _service: NotificationsService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  /* Getter for form controls */
  get email() {
    return this.loginForm.controls.email;
  }
  get password() {
    return this.loginForm.controls.password;
  }
  
  login() {
    this.loginService.userLogin(this.loginForm.value).subscribe(user => {
      if(user) {
        this.router.navigate(['/home']);
      }
    },(error) =>{

      this._service.error('error', error.error);

    });
  }
}
