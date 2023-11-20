import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TratamientoService {
 private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/tratamiento/';

  constructor(private http: HttpClient) {}

  getAllTratamientos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getTratamientoById(id: number) {
    return this.http.get(`${this.apiUrl}${id}`);
  }

  createTratamiento(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateTratamiento(id: number, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

  deleteTratamiento(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}