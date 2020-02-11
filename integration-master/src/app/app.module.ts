import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { LoginComponent } from './_components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './_components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { OAuthModule } from 'angular-oauth2-oidc';
import {MatInputModule} from "@angular/material";
import { Error404Component } from './_components/error404/error404.component';
import {MainNavModule} from "./_components/main-nav/main-nav.module";
import {RegisterComponent} from "./_components/register/register.component";
import {HomeComponent} from "./_components/home/home.component";
import {ProfileComponent} from "./_components/profile/profile.component";
import {PatientComponent} from "./_components/patient/patient.component";
import { ForgetpasswordComponent } from './_components/forgetpassword/forgetpassword.component';
import { ConfirmaccountComponent } from './_components/confirmaccount/confirmaccount.component';
import {MatSnackBar} from "@angular/material";
import { ResetpasswordComponent } from './_components/resetpassword/resetpassword.component';
import {InviteComponent} from "./_components/invite/invite.component";
import {MainNavProfComponent} from "./_components/main-nav-prof/main-nav-prof.component";
import { MainNavModuleProf} from "./_components/main-nav-prof/main-nav.module-prof";
import { HomeProComponent } from './_components/home-pro/home-pro.component';
import { ListUsersComponent } from './_components/list-users/list-users.component';
import { HomeseaComponent } from './_components/homesea/homesea.component';
import {MainNavSeaComponent} from "./_components/main-nav-sea/main-nav-sea.component";
import { RechercheComponent } from './_components/recherche/recherche.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavSeaComponent,
    LoginComponent,
    Error404Component,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    PatientComponent,
    MainNavComponent,
    ForgetpasswordComponent,
    ConfirmaccountComponent,
    ResetpasswordComponent,
    InviteComponent,
    MainNavProfComponent,
    HomeProComponent,
    ListUsersComponent,
    HomeseaComponent,
    RechercheComponent








  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
    NgMaterialMultilevelMenuModule,
    MainNavModule,
    MainNavModuleProf,

    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
