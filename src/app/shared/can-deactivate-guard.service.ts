import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface canComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<canComponentDeactivate> {

  canDeactivate(component: canComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    console.log(component);
    
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
