import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Login} from "../../models/login.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LOGIN_URL =  environment.LOGIN_URL;
  constructor(private http: HttpClient) { }

  userLogin(userCredentials: Login[]): Observable<Login[]> {
    return this.http.post<Login[]>(this.LOGIN_URL, userCredentials);
  }
}
