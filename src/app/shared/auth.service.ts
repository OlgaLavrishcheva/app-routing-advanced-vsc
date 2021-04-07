import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggegIn = false;

  constructor() { }

  login(login: string, password: string): boolean {
    console.log(login);
    console.log(password);

    return login === 'admin' && password === '123' ? this.isLoggegIn = true : false;
  }

  logout() {    
    this.isLoggegIn = false;
  }
}
