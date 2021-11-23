import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Registration} from "../../models/registration.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  REGISTRATION_URL = environment.REG_URL;
  constructor(private http: HttpClient) { }

  registerUser(userData: Registration[]): Observable<Registration[]> {
    return this.http.post<Registration[]>(this.REGISTRATION_URL, userData);
  }

}
