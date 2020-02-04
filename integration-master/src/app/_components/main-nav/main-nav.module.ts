import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mainNavRoutes } from './main-nav.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainNavRoutes)
  ]
})
export  class  MainNavModule {

}
