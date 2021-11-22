import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Registration} from "../../models/registration.model";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  REGISTRATION_URL = 'https://tsenga.herokuapp.com/api/users/register';
  constructor(private http: HttpClient) { }

  registerUser(userData: Registration[]): Observable<Registration[]> {
    return this.http.post<Registration[]>(this.REGISTRATION_URL, userData);
  }

}
