import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSignUp } from '../interface/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  userSignUp(userSignUp: UserSignUp) {
    return this.http.post(`${this.baseUrl}/api/v1/user/sign-up`, userSignUp);
  }
}
