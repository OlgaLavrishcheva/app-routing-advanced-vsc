import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard.service';
import { PhrasesDetailsResolveService } from '../shared/phrases-details-resolve.service';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'phrases', pathMatch: 'full' },
  {
    path: 'phrases',
    component: PhraseHomeComponent,
    children: [
      {
        path: '',
        component: PhraseListComponent,
        children: [
          { 
            path: ':id',
            canDeactivate: [CanDeactivateGuard],
            resolve: {phrase: PhrasesDetailsResolveService},
            component: PhraseDetailsComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
