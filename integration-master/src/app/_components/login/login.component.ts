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
  checked = false;
  pass : string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private _snackBar : MatSnackBar
) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
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

  onContainerClick(){
    if(this.checked){
      this.checked = false;
      console.log(this.checked)

    }else{
      this.checked = true;
      console.log(this.checked)
    }


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
              //console.log(data)

              this.router.navigate(['home'])
              //location.reload();
            },
            error => {

                this.loading = false;
                //const err = JSON.parse(error);
                if(error.error.error_description === "Bad credentials" ){
                  this._snackBar.open(" Mot de passe incorrect ","OK")
                  this.alertService.success("\" Mot de passe incorrect \"",false)
                }
              if(error.error.error_description === "User is disabled" ){
                this._snackBar.open(" Cet utilisateur n est pas active ","OK")
              }

            });

}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,

    })
    //this.router.navigate(["login"]);
  }







}
