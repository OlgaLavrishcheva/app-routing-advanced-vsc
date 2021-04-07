import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userPassword = '123';
  userLogin = 'admin';
  message: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.setMessage();
  }

  setMessage(): void{
    this.message = `Logget ${this.authService.isLoggegIn ? 'in' : 'out'}`;
  }

  login(): void {
    this.message = 'Trying to log in...';
    this.authService.login(this.userLogin, this.userPassword).subscribe(res => {
      console.log(res);
    })

    // this.authService.login(this.userLogin, this.userPassword).then(res => {
    //   console.log('Login promise result:', res);
    //   this.setMessage();
    //   if(this.authService.isLoggegIn) {
    //     const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
    //     this.router.navigate([redirect]);
    //   }
    // });

  }

  logout(): void {
    this.authService.logout();
    this.setMessage();
  }
}
