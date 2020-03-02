import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { ChildComponent } from './child/child.component';
import {MaterialModule} from "../../material/material.module";
import {DevicesComponent} from "./devices/devices.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    MaterialModule
  ],
  declarations: [
    ChildComponent,

  ]
})
export  class  HomeModule {

}
