import { Component, OnInit } from '@angular/core';
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

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.setMessage();
  }

  setMessage(): void{
    this.message = `Logget ${this.authService.isLoggegIn ? 'in' : 'out'}`;
  }

  login(): void {
    this.message = 'Trying to log in...';

    let temp;
    temp = this.authService.login(this.userLogin, this.userPassword);

    console.log(temp);
    this.setMessage();
  }

  logout(): void {
    this.authService.logout();
    this.setMessage();
  }
}
