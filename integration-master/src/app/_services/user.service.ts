import { Injectable } from '@angular/core';
import { HttpClient  , HttpHeaders } from '@angular/common/http';

import  { RegistrationClientDTO } from '../dto';
import { User } from '../_models';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    private userUrl = 'api/users';
    constructor(private http: HttpClient) { }

    getAll():Observable<User[]> {

        return this.http.get<User[]>(this.userUrl)
    }

    getById(id: number) {
        return this.http.get('/users/' + id);
    }
   getCa() {
              return  [ { id: '../../data/ca.json'}];
            }

    register(registrationClientDto: string) {
      console.log(registrationClientDto);
        return this.http.post('https://epod-zuul.herokuapp.com/api/v1/auth-service/registration', registrationClientDto);


    }


    /*update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }*/
}
