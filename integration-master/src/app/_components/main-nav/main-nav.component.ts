import {Component, EventEmitter, Input, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {environment} from "../../../environments/environment";




import { map, shareReplay } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";
declare var  appitems ;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
 currentUser = localStorage.getItem("currentUser");
 obj : any;
 LOG_OUT_URL : string;




appitems  = [
    {
      label: 'E-pod Sante',
      icon: '',
      imageIcon: 'https://www.jobillico.com/medias/logo-entreprise/0/0/exp_logo_7966_fr_2016_09_02_14_49_44.png',
      link: '',
      externalRedirect: true
    },
    {
      label: 'GESTION DES UTILISATEURS',
      icon: 'supervised_user_circle',
      items: [
        {
          label: '____Utilisateurs',
          link: '/register',
          icon: 'supervisor_account',

        },
        {
          label: '____Profils',
          link: '/profile',
          icon: 'perm_identity'
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
    collapseOnSelect: true,
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



  constructor(private breakpointObserver: BreakpointObserver, private router : Router, private http: HttpClient) {
          if (this.currentUser)
          {  this.obj = JSON.parse(this.currentUser)
            this.LOG_OUT_URL = environment.LOG_OUT_URL;
            console.log(this.currentUser)

          }


  }
  logOut() {
      let token  = localStorage.getItem("currentToken");

    const obj = JSON.parse(token);
     let header = new HttpHeaders({'Authorization': obj.access_token});
       this.http.delete(this.LOG_OUT_URL, { headers : header})
       .subscribe(response => {
          localStorage.removeItem("currentUser")
           localStorage.removeItem("currentToken")
         this.router.navigate(["/login"])
         },
         error => console.log(error)
       );


       }

}






