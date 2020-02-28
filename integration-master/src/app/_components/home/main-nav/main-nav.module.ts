import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mainNavRoutes } from './main-nav.routes';
import { ChildComponent } from '../child/child.component';
import {MaterialModule} from "../../../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainNavRoutes),
    MaterialModule
  ],
  declarations: [ChildComponent]
})
export  class  MainNavModule {

}
