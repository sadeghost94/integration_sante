import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor} from './_helpers/jwt.interceptor';

import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import {MatSelectionList} from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { LoginComponent } from './_components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './_components/home/main-nav/main-nav.component';
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
import {HomeModule} from "./_components/home/home.module";
import {RegisterComponent} from "./_components/register/register.component";
import {HomeComponent} from "./_components/home/home.component";
import {ProfileComponent} from "./_components/profile/profile.component";
import {PatientComponent} from "./_components/patient/patient.component";
import { ForgetpasswordComponent } from './_components/forgetpassword/forgetpassword.component';
import { ConfirmaccountComponent } from './_components/confirmaccount/confirmaccount.component';
import {MatSnackBar} from "@angular/material";
import { ResetpasswordComponent } from './_components/resetpassword/resetpassword.component';
import {InviteComponent} from "./_components/home/invite/invite.component";
import {MainNavProfComponent} from "./_components/home-pro/main-nav-prof/main-nav-prof.component";
import { MainNavModuleProf} from "./_components/home-pro/main-nav-prof/main-nav.module-prof";
import { HomeProComponent } from './_components/home-pro/home-pro.component';
import { ListUsersComponent } from './_components/home/list-users/list-users.component';
import { HomeseaComponent } from './_components/homesea/homesea.component';
import {MainNavSeaComponent} from "./_components/homesea/main-nav-sea/main-nav-sea.component";
import { RechercheComponent } from './_components/homesea/recherche/recherche.component';
import { ListPatientsComponent } from './_components/patient/list-patients/list-patients.component';
import {PatientProfileComponent} from './_components/patient/patient-profile/patient-profile.component';
import { AddpatientComponent } from './_components/patient/addpatient/addpatient.component';
import { ExamencliniqueComponent } from './_components/patient/examenclinique/examenclinique.component';
import { SociodemoComponent } from './_components/patient/sociodemo/sociodemo.component';
import { AntecedantsComponent } from './_components/patient/antecedants/antecedants.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ListVisitesComponent } from './_components/patient/list-visites/list-visites.component';
import { RapportComponent } from './_components/patient/rapport/rapport.component';
import { AffectpodometreComponent } from './_components/patient/affectpodometre/affectpodometre.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DevicesComponent } from './_components/home/devices/devices.component';
import { RecomandationComponent } from './_components/patient/recomandation/recomandation.component';
import { PagepatientComponent } from './_components/pagepatient/pagepatient.component';
import { PatientloginComponent } from './_components/patientlogin/patientlogin.component';



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
    DevicesComponent,
    ListPatientsComponent,
    ForgetpasswordComponent,
    ConfirmaccountComponent,
    ResetpasswordComponent,
    MainNavProfComponent,
    HomeProComponent,
    ListUsersComponent,
    HomeseaComponent,
    RechercheComponent,
    PatientProfileComponent,
    AddpatientComponent,
    ExamencliniqueComponent,
    SociodemoComponent,
    AntecedantsComponent,
    ListVisitesComponent,
    RapportComponent,
    AffectpodometreComponent,
    RecomandationComponent,
    PagepatientComponent,
    PatientloginComponent,
    InviteComponent,


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
    HomeModule,
    MainNavModuleProf,
    RouterModule,
    ChartsModule,
    MatDialogModule,
    RouterModule,

    OAuthModule.forRoot(),

    SchedulerModule
  ],
//{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
