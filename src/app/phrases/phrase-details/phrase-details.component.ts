import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../../shared/phrase.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { AuthService } from 'src/app/shared/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {
  phrase: Phrase;
  editValue: string;
  editLanguage: string;

  constructor(
    private svs: PhraseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { phrase: Phrase }) => {
      this.phrase = data.phrase;
      this.editValue = this.phrase.value;
      this.editLanguage = this.phrase.language;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.svs
        .getPhrase(+params.id)
        .then(res => {
          this.phrase = res;
          if (this.phrase) {
            this.editValue = this.phrase.value;
            this.editLanguage = this.phrase.language;
          }
        });
    })
  }

  goToPhrasesList(): void {
    const phraseID = this.phrase ? this.phrase.id : null;

    this.router.navigate(['/phrases', { id: phraseID, param1: 123, param2: 'test' }]);
  }

  isChanged(): boolean {
    return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage);
  }

  save(): void {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.phrase) {
      return true;
    }
    else if (!this.isChanged()) {
      return true;
    }

    return confirm('Вы не сохранили изменения. \nДанные будут потеряны. \nУйти со страницы?');
  }
}