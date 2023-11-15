import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
 private apiUrl = 'https://clinicaback.dev.404.codes/api/v1/agenda/';






 
  constructor(private http: HttpClient) {}

}