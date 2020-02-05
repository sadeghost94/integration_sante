import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {RegistrationClientDTO} from '../dto';
import {User} from '../_models';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {UserInviteDto} from "../dto/UserInviteDto";


@Injectable({providedIn: 'root'})
export class UserService {
  REGISTER_URL: string
  INVITER_URL: string;
  VERIF_TOK_INVITE : string;

  constructor(private http: HttpClient) {
    this.REGISTER_URL = environment.REGISTER_URL;
    this.INVITER_URL = environment.INVITER_URL;
    this.VERIF_TOK_INVITE = environment.VERIF_TOK_INVITE;

  }

  /*getAll():Observable<User[]> {

      //return this.http.get<User[]>(this.userUrl)
  }*/

  getById(id: number) {
    //return this.http.get('/users/' + id);
  }

  getCa() {
    //return  [ { id: '../../data/ca.json'}];
  }

  register(registrationClientDto: string) {
    console.log(registrationClientDto);
    return this.http.post(this.REGISTER_URL, registrationClientDto);


  }

  recup_token(token : string){
    let header = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    return this.http.get(this.VERIF_TOK_INVITE + token,
      {responseType: 'text'});
  }

  inviter(userInviteDto: UserInviteDto) {
    console.log(this.INVITER_URL);
    console.log(userInviteDto);
    return this.http.post(this.INVITER_URL, userInviteDto);


  }


  /*update(user: User) {
      return this.http.put(`/users/` + user.id, user);
  }

  delete(id: number) {
      return this.http.delete(`/users/` + id);
  }*/
}
