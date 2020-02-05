import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {MatSnackBar} from "@angular/material/snack-bar";

import {map, startWith} from 'rxjs/operators';


import {AlertService, AuthenticationService, UserService} from '../../_services';
import {RegistrationClientDTO} from "../../dto";
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDatepickerInputEvent} from "@angular/material";
import {AccountDto} from "../../dto/AccountDto";
import {EmailDto} from "../../dto/EmailDto";
import {RoleDto} from "../../dto/roleDto";
import {InstitutionDto} from "../../dto/InstitutionDto";
import {Profile} from "../../dto/Profile";
import {AddressDto} from "../../dto/AddressDto";
import {promise} from "selenium-webdriver";
import  *  as  data  from  '../../data/ca.json';
import {UserInviteDto} from "../../dto/UserInviteDto";


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export interface City {
          city: string;
          admin: string;
          country: string;
          population_proper: string;
          iso2: string;
          capital: string;
          lat: string;
          lng: string;
          population: string;
}
@Component({templateUrl: 'invite.component.html',styleUrls: ['./invite.component.css']})
export class InviteComponent implements OnInit {
  inviterForm: FormGroup;
  loading = false;
  submitted = false;
  profilelist : any;







  currentUser = localStorage.getItem("currentUser");
   user = JSON.parse(this.currentUser)
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private _snackBar : MatSnackBar

  ) {

    if (this.currentUser) {


    }else{
      this.router.navigate(['/']);



    }

    this.profilelist = [
      new Profile( "PROFESSIONAL", "PRO",  true),
      new Profile( "SEARCHER", "SEA",  true)


    ];

  }

  ngOnInit() {

  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  // convenience getter for easy access to form fields
  get f() {
    return this.inviterForm.controls;
  }


  register(emailDto: string,
    roleeDto: string) {
    this.submitted = true;




    let data = new UserInviteDto(this.user.user_name,
     emailDto, roleeDto, null, null, null,null,null,null )

    this.loading = true;
    this.userService.inviter(data)
      .pipe(first())
      .subscribe(
        result => {
          console.log(result)
          this._snackBar.open("on a envoyer le mail","OK")
          this.router.navigate(["home"])
          //var json = JSON.parse(<string>result.valueOf());
          //this.email = result["email"]
         /* if (result["emailExist"]){
            this.openSnackBar("Vous avez un mail, de recuperation de mot de passe","OK")

          } else {
            this.openSnackBar("le mail n`existe pas ","OK")
          }*/

        });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,

    })
    //this.router.navigate(["login"]);
  }

}
