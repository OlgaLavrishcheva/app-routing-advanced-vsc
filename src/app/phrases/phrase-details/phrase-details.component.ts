import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../../shared/phrase.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {
  phrase: Phrase;

  constructor(private svs: PhraseService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      const id = +params.id;

      this.svs
        .getPhrase(id)
        .then(res => this.phrase = res);
    })
  }

  goToPhrasesList(): void {
    this.router.navigate(['/phrases']);
  }
}