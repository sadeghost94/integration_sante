import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../_services";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loading = false;
  currentUser = localStorage.getItem("currentUser");

  constructor(private  router: Router,
  private authenticationService: AuthenticationService) {
    if (this.currentUser) {


    }else{
      this.router.navigate(['/']);

    }

}

  ngOnInit() {
  }

}
