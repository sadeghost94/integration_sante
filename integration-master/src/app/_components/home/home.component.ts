import { Component, OnInit, Input ,ViewChild } from '@angular/core';
import {chainedInstruction} from "@angular/compiler/src/render3/view/util";
import  { AppComponent} from "../../app.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //@ViewChild(MainNavComponent, {static: true} ) child;
  //@Input() is_admin : boolean = false;
  currentUser = localStorage.getItem("currentUser")
  @ViewChild(AppComponent, {static: false}) child;
  constructor(private router : Router) {
    if (localStorage.getItem("currentRole" ) === "role_admin") {

    } else {
      router.navigate(["/"])
    }

   }



  ngOnInit() {









  }

}
