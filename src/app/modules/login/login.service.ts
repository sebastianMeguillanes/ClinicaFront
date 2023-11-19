import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/login/';

  constructor(private http: HttpClient) {}

 
  login (data: any){
    return this.http.post(`${this.apiUrl}`,data);
  }


 
}
