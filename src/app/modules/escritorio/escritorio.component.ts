import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.scss']
})
export class EscritorioComponent {
  constructor(private router: Router) {}

  irADoctorList() {
    this.router.navigate(['/doctor/list']); // Redirigir a la página de Doctores
  }

  irAPacienteList() {
    this.router.navigate(['/paciente/list']); // Redirigir a la página de Pacientes
  }
  irATratamientoList() {
    this.router.navigate(['/tratamiento/list']); // Redirigir a la página de Tratamientos
  }
}
