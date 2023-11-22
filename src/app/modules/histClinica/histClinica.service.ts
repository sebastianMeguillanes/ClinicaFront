import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HistClinicaService {
 private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/histClinica/';
 //private apiUrl2 = 'https://clinicaback.dev.404.codes/api/v1/histClinica/historias';
 // private apiUrl = 'http://localhost:2000/api/v1/paciente/';


  constructor(private http: HttpClient) {}

  getAllHistClinica() {
    return this.http.get(`${this.apiUrl}`);
  }

  getHistClinicaById(id: number) {
    return this.http.get(`${this.apiUrl}${id}`);
  }

  // getHistClinicaById2(id: number) {
  //   return this.http.get(`${this.apiUrl2}${id}`);
  // }

  createHistClinica(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateHistClinica(id: number, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

  deleteHistClinica(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }

  getImage(id: number) {  
    //window.alert(`${this.apiUrl}/radiografia/${id}`)
    return this.http.get(`${this.apiUrl}/radiografia/${id}`);

  }

  getHistClinicaByPacienteId(pacienteId: number) {
    return this.http.get(`${this.apiUrl}/histClinica/list?pacienteId=${pacienteId}`);
  }

  updateImage(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/radiografia/${id}`, data);
  }

  
  
  
}

