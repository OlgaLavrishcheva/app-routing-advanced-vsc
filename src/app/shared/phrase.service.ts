import { Injectable } from '@angular/core';
import { PHRASES } from './mock-data';
import { Phrase } from './phrase.class';

const phrasePromise: Promise<Phrase[]> = new Promise((r) => {
  setTimeout(() => {
    r(PHRASES)
  }, 1000)
});

// Более короткий вариант записи. Исключает таймауты.
// const phrasePromise = Promise.resolve(PHRASES);

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor() { }

  getAll(): Promise<Phrase[]> {
    return phrasePromise;
  }

  getPhrase(id: number): Promise<Phrase> {
    return phrasePromise.then(phrases => phrases.find (phrase => phrase.id === id));
  }
}
