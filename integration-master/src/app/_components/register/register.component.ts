import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
import *  as  data from '../../data/ca.json';


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

@Component({templateUrl: 'register.component.html', styleUrls: ['./register.component.css']})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  birthday: string;
  institutionCodeDisabled: boolean;
  institutionNameDisabled: boolean;
  profilelist: any;
  cittty: string [];
  role: Profile;
  tokenpassword : string
  stateCtrl = new FormControl();
  tokrep : any ;


  currentUser = localStorage.getItem("currentUser");
  user = JSON.parse(this.currentUser)

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {

    if (this.currentUser) {

      this.router.navigate(['home']);


    } else {
      this.getCodeFromURI()

    }

    this.profilelist = [
      new Profile("PROFESSIONAL", "role_professional", true),
      new Profile("SEARCHER", "role_searcher", true)


    ];

  }

  ngOnInit() {

  }


  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  getBirthday(event: MatDatepickerInputEvent<Date>) {
    const d = new Date(event.value);

    const date = d.getDate();
    const month = d.getMonth() + 1; // Be careful! January is 0 not 1
    const year = d.getFullYear();

    this.birthday = year + '-' + month + '-' + date;
    console.log(this.birthday)
  }

  register(username: string,
           password: string,
           firstName: string,
           lastname: string,
           middlename: string,
           city: string,
           postalCode: string,
           province: string,
           street: string,
           streetNumber: string) {
    this.submitted = true;


    let data = new RegistrationClientDTO(new AccountDto(username, password),
      this.birthday,
      this.tokrep.email,  firstName, middlename, lastname,

      new InstitutionDto(null,null),null,
      new AddressDto(city, postalCode, province, street, Number(streetNumber)));

    this.loading = true;
    this.userService.register(JSON.stringify(data))
      .pipe(first())
      .subscribe(
        data => {

          if (data["emailExist"] == true) {
            this._snackBar.open("Ce mail est deja pris", "OK")
            this.loading = false
            //this.router.navigate(['/login']);
          } else if (data["usernameExist"] == true) {
            this._snackBar.open("le nom d utilisateur est deja pris", "OK")
            this.loading = false
            //this.router.navigate(['/login']);
          } else {
            this._snackBar.open("l utilisateur a ete  enregistre avec succes, il recevra un mail de comfirmation", "OK")
            this.router.navigate(["home"])
          }
          console.log(data);
        },
        error => {
          console.log(error)
          this._snackBar.open("Donnees saisies invalide", "OK")
          this.loading = false;
        });
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,

    })
    //this.router.navigate(["login"]);
  }

  getCodeFromURI() {

    this.route.queryParams
      .subscribe(params => {
        let token: string;
        token = params.token;
        console.log(token)
        if (token != null) {
          this.tokenpassword = token;
          console.log(this.tokenpassword)

                let message = this.userService.recup_token(token).subscribe(
                     response => {
                       console.log(response)
                        this.tokrep = JSON.parse(response.toString())
                       console.log(this.tokrep.emailDto)
                       if (this.tokrep.tokenExist) {
                              this._snackBar.open("Veuillez saisir les informations demander" +
                                " et votre compte sera activer","OK")
                       } else {
                         let fakeUrl = "user/invite?token="+token;
                         this.router.navigate([fakeUrl])
                       }

                       //this.openSnackBar(response.toString(), "Ok")
                     }
                     //error => this.openSnackBar(error.error.text, "Ok")

                   );

        } else {
          console.log("NUUUUUUUUUUUUUUUUUUUULLLLLLL")
        }
      });
  }

}
