import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggegIn = false;
  redirectUrl: string;

  constructor() { }

  login(login: string, password: string): Promise<boolean> {
    const promise = new Promise (resolve => {
      setTimeout(() => {
        resolve({
          login: 'admin',
          password: '123'
        });
      }, 1000);
    });

    return promise.then((res: any) => {
      return login === res.login && password === res.password ? this.isLoggegIn = true : false;
    });
    
  }

  logout() {
    this.isLoggegIn = false;
  }
}
