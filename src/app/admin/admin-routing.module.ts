import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth-guard.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path:'', redirectTo: 'phrases', pathMatch: 'full'},
      {path: 'phrases', component: ManagePhrasesComponent},
      {path: 'users', component: ManageUsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
