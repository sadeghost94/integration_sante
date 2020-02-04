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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent },//canActivate: [AuthGuard]
  { path: 'home', component: HomeComponent  ,canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent ,//canActivate: [AuthGuard]
  },
  { path: 'patient', component: PatientComponent,//canActivate: [AuthGuard]
  },
  { path: 'forgetpassword', component: ForgetpasswordComponent,//canActivate: [AuthGuard]
  },
  { path: 'registration/confirm', component: ConfirmaccountComponent },
  { path: 'update/password', component: ResetpasswordComponent },

  { path: '**', component: Error404Component }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
