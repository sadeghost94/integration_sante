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
@Component({templateUrl: 'register.component.html',styleUrls: ['./register.component.css']})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  birthday: string;
  institutionCodeDisabled : boolean;
  institutionNameDisabled : boolean;
  profilelist : any;
  cittty : string [];
  role : Profile;
  stateCtrl = new FormControl();







  currentUser = localStorage.getItem("currentUser");
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
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

  register(username: string, password: string,emailDto: string,firstName: string,
   lastname: string,middlename: string,  institutionCode: string,
    roleeDto: string, city: string,
     postalCode: string, province: string, street: string, streetNumber: string) {
    this.submitted = true;
       /* if(roleeDto == "ADMIN"){

               this.institutionCodeDisabled = true;
               this.institutionNameDisabled = false;
               } else {
                 roleeDto = null;
               }*/


    let data = new RegistrationClientDTO(new AccountDto(username, password) ,
    this.birthday, new EmailDto(emailDto), firstName, middlename,
     lastname, new InstitutionDto(institutionCode, ""),
      new RoleDto(roleeDto,null,null), new AddressDto(city, postalCode, province, street, Number(streetNumber)))

    this.loading = true;
    this.userService.register(JSON.stringify(data))
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);

          if (data["emailExist"]==true){
            this._snackBar.open("Ce mail est deja pris","OK")
            this.loading =false
            //this.router.navigate(['/login']);
          }else if(data["usernameExist"]==true){
            this._snackBar.open("le nom d utilisateur est deja pris","OK")
            this.loading =false
            //this.router.navigate(['/login']);
          }else{
            this._snackBar.open("l utilisateur a ete  enregistre avec succes, il recevra un mail de comfirmation","OK")
            this.router.navigate(["home"])
          }
          console.log(data);
        },
        error => {
          console.log(error)
          this._snackBar.open("Donnees saisies invalide","OK")
          this.loading = false;
        });
  }
  onSelect(roleDto : string) {
         if(roleDto == "ADMIN"){

           this.institutionCodeDisabled = true;
           this.institutionNameDisabled = false;
           } else {
             roleDto = null;
           }
      }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,

    })
    //this.router.navigate(["login"]);
  }

}
