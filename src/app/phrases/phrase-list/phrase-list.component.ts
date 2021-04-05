import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrasses: Phrase[];
  selectedID: number;

  constructor(private svs: PhraseService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedID = +params.id;

      this.svs
        .getAll()
        .then(res => this.phrasses = res);
    });
  }

  onSelect(selected: Phrase): void {
    this.router.navigate(['/phrase', selected.id]);
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID;
  }
}
