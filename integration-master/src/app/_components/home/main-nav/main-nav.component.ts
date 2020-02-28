import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import { RouterModule } from '@angular/router';
import {Router, ActivatedRoute} from '@angular/router';
import {environment} from "../../../../environments/environment";


import {first, map, shareReplay} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginClientDTO} from "../../../dto/LoginClientDTO";
import {AuthenticationService} from "../../../_services";
import {MatSidenav} from "@angular/material/sidenav";

declare var appitems;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  currentUser = localStorage.getItem("currentUser");
  obj: any;

  @ViewChild('sidenav',{static : false}) sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  appitems = [
    {
      label: 'E-pod Sante',
      icon: '',
      imageIcon: 'https://www.jobillico.com/medias/logo-entreprise/0/0/exp_logo_7966_fr_2016_09_02_14_49_44.png',
      link: '',
      externalRedirect: true
    },
    {
      label: 'ADMINSTRATION',
      icon: 'supervised_user_circle',
      items: [
        {
          label: 'Utilisateurs',
          link: '/inviter',
          icon: 'supervisor_account',

        },
        {
          label: 'Profils',
          link: '/profile',
          icon: 'perm_identity'
        },
        {
          label: 'Appareils',
          link: '/device',
          icon: 'watch'
        }

      ]
    },
    {
      label: 'MOTEUR DE SUGGESSION',
      icon: 'build',
      items: [
        {
          label: ' MODELE ',
          link: '/home',
          icon: 'add_circle',


        },
        {
          label: 'ENTRAINEMENT',
          link: '/home',
          icon: 'toggle_off',


        }
      ]
    }

  ];
  config = {
    paddingAtStart: false,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `white`,
    fontColor: `#323232`,
    backgroundColor: `white`,
    selectedListFontColor: `red`,
    //highlightOnSelect: true,
    collapseOnSelect: false,
    rtlLayout: false
  };
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  selectedItem($event) {
    console.log(this.currentUser)


  }

  selectedLabel($event) {
  }


  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private http: HttpClient, private authenticationService : AuthenticationService) {
    if (localStorage.getItem("currentRole" ) === "role_admin"){
      this.obj = JSON.parse(this.currentUser)
      console.log(this.obj)

    }else {
      router.navigate(["/"])
    }


  }

  logOut() {
    this.authenticationService.logout()



  }

}





