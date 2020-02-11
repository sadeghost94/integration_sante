import { Routes } from '@angular/router';
import { MainNavProfComponent } from './main-nav-prof.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { PatientComponent } from '../patient/patient.component';
import {HomeProComponent} from "../home-pro/home-pro.component";

export const mainNavProfRoutes : Routes = [
  {
    path: 'main-nav',
    component: MainNavProfComponent,
    children: [
      { path: '', redirectTo: 'homepro', pathMatch: 'full' },
      { path: 'patient', component: PatientComponent}

    ]
  }
];
