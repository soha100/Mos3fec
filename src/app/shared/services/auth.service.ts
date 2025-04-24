import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'c:/Users/ehab/Desktop/Mos3efk/node_modules/jwt-decode/build/esm/index';
import { environment } from '../../../environments/environment';
// import { environment } from '../../../environments/environment.prod';

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  isDoctor: boolean;
  // acceptTerms: boolean;
}
export interface loginData {
  email: string;
  password: string;
  fcmToken: string;
}
export interface completeData {
  LicenseNumber: string;
  AboutMe: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  userData!: {};
  constructor(private http: HttpClient) {}
  decodeUserData() {
    let encodeToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken = jwtDecode(encodeToken);
    this.userData = decodedToken;
  }
  signup(data: SignupData): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/api/Authentication/Register`,
      data,
      { headers: this.headers }
    );
  }
  login(data: loginData): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/api/Authentication/Login`,
      data,
      { headers: this.headers }
    );
  }

  completeData(data: completeData): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/api/doctors/profile/complete`,
      data,
      { headers: this.headers }
    );
  }

  // confirmEmail(userId: string, code: string): Observable<any> {
  //   return this.http.post(
  //     `${environment.apiUrl}/api/Authentication/confirm-email`,
  //     {
  //       userId,
  //       code,
  //     }
  //   );
  // }

  confirmEmail(userId: string, code: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/api/Authentication/confirm-email`,
      { userId, code }
    );
  }

  resendConfirmationEmail(email: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/api/Authentication/resend-confirmation-email`,
      {
        email,
      }
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/api/Authentication/forgot-password`,
      { email }
    );
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/api/Authentication/reset-password`,
      {
        token,
        newPassword,
      }
    );
  }
}
