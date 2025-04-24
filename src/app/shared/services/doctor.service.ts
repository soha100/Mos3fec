import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  // headers: any = {
  //   token: localStorage.getItem('userToken'),
  // };
  // headers = new HttpHeaders({
  //   token: localStorage.getItem('userToken'),
  // });
  constructor(private http: HttpClient) {}

  getDoctorProfile(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    });
    return this.http.get(`${environment.apiUrl}/api/doctors/profile`, {
      headers,
    });
  }
}
