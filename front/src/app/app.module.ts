import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CongeListComponent } from './components/conge/conge-list/conge-list.component';
import { AddCongeComponent } from './components/conge/add-conge/add-conge.component';
import { TacheListComponent } from './components/tache/tache-list/tache-list.component';
import { AddTacheComponent } from './components/tache/add-tache/add-tache.component';
import { userListComponent } from './components/user/user-list/user-list.component';
import { AdduserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { EditCongeComponent } from './components/conge/edit-conge/edit-conge.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    CongeListComponent,
    AddCongeComponent,
    TacheListComponent,
    AddTacheComponent,
    userListComponent,
    AdduserComponent,
    EditUserComponent,
    EditCongeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
