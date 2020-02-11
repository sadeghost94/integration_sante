import {Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatSnackBar} from "@angular/material/snack-bar";



import { AuthenticationService, AlertService } from '../../_services';
import {LoginClientDTO} from "../../dto/LoginClientDTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private _snackBar : MatSnackBar
) {
    // redirect to home if already logged in
    if (localStorage.getItem("currentRole")==="role_professional") {
        this.router.navigate(['/homepro']);
    } else if(localStorage.getItem("currentRole")==="role_admin") {
       this.router.navigate(['/home']);
    }
}

  ngOnInit() {

      this.loginForm = this.formBuilder.group({
        'username': ['', [
          Validators.required,

        ]],
        'password': ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]],
        'remember': []

      });


  }



  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(new LoginClientDTO(this.f.username.value,this.f.password.value, "password"))
        .pipe(first())
        .subscribe(
            data => {
              console.log(localStorage.getItem("currentToken"))
             if (localStorage.getItem("currentRole")=== "role_admin")
             {
               console.log(localStorage.getItem("currentRole"))
               this.router.navigate(['home'])

             }else  if (localStorage.getItem("currentRole") === "role_professional")
             {
               console.log(localStorage.getItem("currentRole"))
               this.router.navigate(['home/professional'])
             }else  if (localStorage.getItem("currentRole") === "role_searcher")
             {
               console.log(localStorage.getItem("currentRole"))
               this.router.navigate(['home/searcher'])
             }
             else {
               this.router.navigate(['login'])
             }


              //location.reload();
            },
            error => {

              console.log(error)
                this.loading = false;
                //const err = JSON.parse(error);

                this._snackBar.open(error.error.error_description,"OK")


            });

}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,

    })
    //this.router.navigate(["login"]);
  }







}
