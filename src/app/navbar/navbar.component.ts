import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
  irAAgendaList() {
    this.router.navigate(['/agenda/list']); // Redirigir a la página de Agenda
  }
}
