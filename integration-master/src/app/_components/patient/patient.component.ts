import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services";
import {Router} from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  currentUser = localStorage.getItem("currentUser");
  constructor(private router: Router,
    private authenticationService: AuthenticationService,) {
    if (localStorage.getItem("currentRole" ) === "role_professional") {


    }else{
      this.router.navigate(['/']);

    }
  }

  ngOnInit() {

  }

}
