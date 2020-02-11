import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {environment} from "../../environments/environment";
import {UserInviteDto} from "../dto/UserInviteDto";
import {UserRequestDto} from "../dto";
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class UserService {
  REGISTER_URL: string
  INVITER_URL: string;
  VERIF_TOK_INVITE : string;
  USERS_URL : string;
  BLOCK_USER_URL : string;

  constructor(private http: HttpClient) {
    this.REGISTER_URL = environment.REGISTER_URL;
    this.INVITER_URL = environment.INVITER_URL;
    this.VERIF_TOK_INVITE = environment.VERIF_TOK_INVITE;
    this.USERS_URL = environment.USERS_URL;
    this.BLOCK_USER_URL = environment.BLOCK_USER_URL;

  }

  getAll(){
    let token = localStorage.getItem("currentToken");
    const obj = JSON.parse(token);
    let header = new HttpHeaders({'Authorization': "bearer "+obj.access_token});
      return this.http.get(this.USERS_URL, {headers: header})
  }

  getById(id: number) {
    //return this.http.get('/users/' + id);
  }

  getCa() {
    //return  [ { id: '../../data/ca.json'}];
  }

  register(registrationClientDto: string) {
    console.log(registrationClientDto);
    return this.http.post(this.REGISTER_URL, registrationClientDto, {headers: {'Content-Type': 'application/json'}});


  }

  recup_token(token : string){

    return this.http.get(this.VERIF_TOK_INVITE + token);
  }

  inviter(userInviteDto: UserInviteDto) {
    let token = localStorage.getItem("currentToken");
    const obj = JSON.parse(token);
    let header = new HttpHeaders({'Authorization': "bearer "+obj.access_token});
    console.log(this.INVITER_URL);
    console.log(userInviteDto);
    return this.http.post(this.INVITER_URL, userInviteDto, {headers : header});


  }


  block(user: UserRequestDto, blocker : boolean) {
    console.log("desactiver")
    let token = localStorage.getItem("currentToken");
    const obj = JSON.parse(token);
    let header = new HttpHeaders({'Authorization': "bearer "+obj.access_token});
    let params = new  HttpParams().set("enable",blocker.toString())


      return this.http.put(this.BLOCK_USER_URL, user,{headers: header, params: params});
  }

  /*delete(id: number) {
      return this.http.delete(`/users/` + id);
  }*/
}
