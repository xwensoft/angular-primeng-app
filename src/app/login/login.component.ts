import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from './login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  usernamevalid: boolean = false;

  constructor(
    private router:Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  dologin() {
    if (this.username == null || this.username.length < 1) {
      console.log('11111');
      this.usernamevalid = false;
    }
    else {
      this.usernamevalid = true;
      console.log('22222');
    }

    let user = new User();
    user.user = this.username;
    user.password = this.password;
    this.loginService
      .login(user)
      .subscribe(
        data => {
          console.log(data.token);
          sessionStorage.setItem('accessToken', data.token)
          this.router.navigate(["workspace"]);
        },
        error => {
          console.error(error);
        });
      
  }

}
