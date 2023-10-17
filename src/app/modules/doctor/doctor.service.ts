import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/doctor/';

  constructor(private http: HttpClient) {}

  getAllDoctores() {
    return this.http.get(`${this.apiUrl}`);
  }

  getOneDoctor(id: number) {
    return this.http.get(`${this.apiUrl}${id}`);
  }

  createNewDoctor(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateOneDoctor(id: number, data: any) {
    return this.http.put(`${this.apiUrl}:${id}`, data);
  }

  deleteOneDoctor(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}

