import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HistClinicaService {
 private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/histClinica/';

 // private apiUrl = 'http://localhost:2000/api/v1/paciente/';


  constructor(private http: HttpClient) {}

  getAllHistClinica() {
    return this.http.get(`${this.apiUrl}`);
  }

  getHistClinicaById(id: number) {
    return this.http.get(`${this.apiUrl}${id}`);
  }

  createHistClinica(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateHistClinica(id: number, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

  deleteHistClinica(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }

  /*
  crearFoto(radiografia: File){
    const fd = new FormData();
    fd.append('image', radiografia);
    return this.http.post(`${this.apiUrl}`, fd);
  }

  /*cargarFoto(id: string){
    return this.http.get<radiografia>(`${this.apiUrl}${id}`);
  }

  cargarFotos(){
    return this.http.get<radiografia[]>(`${this.apiUrl}`);
  }
  /*editarFoto(id: string){
    return this.http.put(`${this.apiUrl}/${id}`, {title, description});
  }
  */

  getHistClinicaByPacienteId(pacienteId: number) {
    return this.http.get(`${this.apiUrl}/histClinica/list?pacienteId=${pacienteId}`);
  }
}
