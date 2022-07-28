import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './components/content/content.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CongeListComponent } from './components/conge/conge-list/conge-list.component';
import { AddCongeComponent } from './components/conge/add-conge/add-conge.component';
import { TacheListComponent } from './components/tache/tache-list/tache-list.component';
import { AddTacheComponent } from './components/tache/add-tache/add-tache.component';
import { userListComponent } from './components/user/user-list/user-list.component';
import { AdduserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { EditCongeComponent } from './components/conge/edit-conge/edit-conge.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'request-reset', component: RequestResetComponent },
  // { path: 'response-reset/:id/:token', component: ResponseResetComponent },
  { path: 'content', component: ContentComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'conge-list', component: CongeListComponent,canActivate:[AuthGuard] },
  { path: 'add-conge', component: AddCongeComponent,canActivate:[AuthGuard] },
  { path: 'tache-list', component: TacheListComponent,canActivate:[AuthGuard] },
  { path: 'add-tache', component: AddTacheComponent,canActivate:[AuthGuard] },
  { path: 'user-list', component: userListComponent,canActivate:[AuthGuard] },
  { path: 'add-user', component: AdduserComponent,canActivate:[AuthGuard] },
  { path: 'edit-user/:_id', component: EditUserComponent,canActivate:[AuthGuard] },
  { path: 'edit-conge/:_id', component: EditCongeComponent,canActivate:[AuthGuard] },

  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: '**', redirectTo:'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
