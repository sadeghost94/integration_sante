import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {UserInviteDto} from "../dto/UserInviteDto";
import {Request, UserRequestDto} from "../dto";
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class UserService {
  REGISTER_URL: string
  INVITER_URL: string;
  VERIF_TOK_INVITE : string;
  USERS_URL : string;
  BLOCK_USER_URL : string;
  ADD_DEVICE : string
  RM_DEVICE : string
  LIST_USER : string

  constructor(private http: HttpClient) {
    this.REGISTER_URL = environment.REGISTER_URL;
    this.INVITER_URL = environment.INVITER_URL;
    this.VERIF_TOK_INVITE = environment.VERIF_TOK_INVITE;
    this.USERS_URL = environment.USERS_URL;
    this.BLOCK_USER_URL = environment.BLOCK_USER_URL;
    this.ADD_DEVICE = environment.ADD_DEVICE
    this.RM_DEVICE = environment.RM_DEVICE
    this.LIST_USER = environment.LIST_USER

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
  info_user(username : string)
  {
    let token = localStorage.getItem("currentToken");
    const obj = JSON.parse(token);
    let header = new HttpHeaders({'Authorization': "bearer "+obj.access_token});
    let params = new HttpParams()
      .set('username', username)
    return this.http.post("https://epod-zuul.herokuapp.com/api/v1/auth-service/user", null, {
      headers: header,
      params: params
    })



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
  addPodo(request : Request){
    let token = localStorage.getItem("currentToken");
    const obj = JSON.parse(token);
    let header = new HttpHeaders({'Authorization': "bearer "+obj.access_token});

    console.log(this.INVITER_URL);
    return this.http.post(this.ADD_DEVICE,request, {headers : header});

  }
  removePodo(request : Request){
    let token = localStorage.getItem("currentToken");
    const obj = JSON.parse(token);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json','Authorization': "bearer "+obj.access_token
      }),
      body: request
    };
    console.log(this.INVITER_URL);
    return this.http.delete(this.RM_DEVICE,options);

  }
  getPodos(){
    let token = localStorage.getItem("currentToken");
    const obj = JSON.parse(token);
    let header = new HttpHeaders({'Authorization': "bearer "+obj.access_token});
    return this.http.get(this.LIST_USER, {headers: header})

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
