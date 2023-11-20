import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
 private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/usuario/';

  constructor(private http: HttpClient) {}

  getAllUsuario() {
    return this.http.get(`${this.apiUrl}`);
  }

  getUsuarioById(id: number) {
    return this.http.get(`${this.apiUrl}${id}`);
  }

  createUsuario(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateUsuario(id: number, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

//   deleteTratamiento(id: number) {
//     return this.http.delete(`${this.apiUrl}${id}`);
//   }
}