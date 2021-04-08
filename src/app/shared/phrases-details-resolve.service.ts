import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phrase } from './phrase.class';
import { PhraseService } from './phrase.service';

@Injectable({
  providedIn: 'root'
})
export class PhrasesDetailsResolveService implements Resolve<Phrase | boolean> {

  constructor(private router: Router, private svs: PhraseService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Phrase | boolean> | Promise<Phrase | boolean> | any {
    const id = +route.params.id;

    return this.svs.getPhrase(id).then(phrase => {
      if (phrase) {
        return phrase;
      } else {
        this.router.navigate(['/phrases']);
        return false;
      }
    })
  }
}
