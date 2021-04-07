import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggegIn = false;
  redirectUrl: string;

  constructor() { }

  login(login: string, password: string): Observable<boolean> {

    const result = of({ login: 'admin', password: '123' }).pipe(delay(2000));
    return result.pipe(map((res: any) => 
    login === res.login && password === res.password ? this.isLoggegIn = true : false));
  }

  logout() {
    this.isLoggegIn = false;
  }
}