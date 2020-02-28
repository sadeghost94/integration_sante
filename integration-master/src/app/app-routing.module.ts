import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './_components/register/register.component';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { AuthGuard } from './_guards';
import { ProfileComponent } from './_components/profile/profile.component';
import { PatientComponent } from './_components/patient/patient.component';
import {AuthenticationService} from "./_services";
import {Error404Component} from "./_components/error404/error404.component";
import {ForgetpasswordComponent} from "./_components/forgetpassword/forgetpassword.component";
import {ConfirmaccountComponent} from "./_components/confirmaccount/confirmaccount.component";
import {ResetpasswordComponent} from "./_components/resetpassword/resetpassword.component";
import {InviteComponent} from "./_components/home/invite/invite.component";
import {HomeProComponent} from "./_components/home-pro/home-pro.component";
import {HomeseaComponent} from "./_components/homesea/homesea.component";
import {RechercheComponent} from "./_components/homesea/recherche/recherche.component";
import {ChildComponent} from "./_components/home/child/child.component";
import {AddpatientComponent} from "./_components/patient/addpatient/addpatient.component";
import {ListPatientsComponent} from "./_components/patient/list-patients/list-patients.component";
import {DevicesComponent} from "./_components/home/devices/devices.component";
import {RecomandationComponent} from "./_components/patient/recomandation/recomandation.component";
import {PagepatientComponent} from "./_components/pagepatient/pagepatient.component";
import {PatientloginComponent} from "./_components/patientlogin/patientlogin.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent  },
  { path: 'home', component: HomeComponent  ,canActivate: [AuthGuard] },
  { path: 'home/professional', component: HomeProComponent  ,canActivate: [AuthGuard] },
  { path: 'home/searcher', component: HomeseaComponent  ,canActivate: [AuthGuard] },

  { path: 'profile', component: ProfileComponent},
  { path: 'patient', component: PatientComponent},
  { path: 'recherche', component: RechercheComponent},
  { path: 'inviter', component: InviteComponent},
  { path: 'forgetpassword', component: ForgetpasswordComponent},
  { path: 'registration/confirm', component: ConfirmaccountComponent },
  { path: 'update/password', component: ResetpasswordComponent },
  { path: "user/invite", component: RegisterComponent},
  { path: 'child', component: ChildComponent },
  { path: 'addpatient', component: AddpatientComponent },
  { path: 'listpatient', component: ListPatientsComponent },
  { path: 'device', component: DevicesComponent },
  { path: 'reco', component: RecomandationComponent },
  { path: 'patient/questionnaire', component: PagepatientComponent },
  { path: 'patient/login', component: PatientloginComponent },
  { path: '**', component: Error404Component },






];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
