import { Routes } from '@angular/router';
import { MainNavComponent } from './main-nav.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { PatientComponent } from '../patient/patient.component';

export const mainNavRoutes : Routes = [
  {
    path: 'main-nav',
    component: MainNavComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'patient', component: PatientComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'register', component: RegisterComponent}

    ]
  }
];
