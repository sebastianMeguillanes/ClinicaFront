import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
 private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/paciente/';

 // private apiUrl = 'http://localhost:2000/api/v1/paciente/';


  constructor(private http: HttpClient) {}

  getAllPacientes() {
    return this.http.get(`${this.apiUrl}`);
  }

  getPacienteById(id: number) {
    return this.http.get(`${this.apiUrl}${id}`);
  }

  createPaciente(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updatePaciente(id: number, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

  deletePaciente(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
