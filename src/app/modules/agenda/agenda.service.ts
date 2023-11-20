import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
 private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/agenda/';

 // private apiUrl = 'http://localhost:2000/api/v1/paciente/';


  constructor(private http: HttpClient) {}

  getAllAgenda() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAgendaById(id: number) {
    return this.http.get(`${this.apiUrl}${id}`);
  }

  createAgenda(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateAgenda(id: number, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

  deleteAgenda(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
