import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _createuserUrl = "http://localhost:5000/api/create/";

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._createuserUrl, user)
  }


}
