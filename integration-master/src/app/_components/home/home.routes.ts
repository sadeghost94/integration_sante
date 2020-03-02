import {RouterModule, Routes} from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { PatientComponent } from '../patient/patient.component';
import {DevicesComponent} from "./devices/devices.component";
import {NgModule} from "@angular/core";
import {InviteComponent} from "./invite/invite.component";
import {ListPatientsComponent} from "../patient/list-patients/list-patients.component";

export const homeRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'inviter', component: InviteComponent},
      { path: 'device', component: DevicesComponent },
      { path: 'listpatient', component: ListPatientsComponent }



    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

