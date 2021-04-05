import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrasses: Phrase[];

  constructor(private svs: PhraseService, private router: Router) { }

  ngOnInit(): void {
    this.svs
    .getAll()
    .then(res => this.phrasses = res);
  }

  onSelect(selected: Phrase): void {
    this.router.navigate(['/phrase', selected.id]);
  }

}
