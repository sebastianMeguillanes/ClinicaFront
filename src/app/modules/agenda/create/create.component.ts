import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { DoctorService } from '../../doctor/doctor.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  doctores: any[] = [];
  agendaData: any = {
  nombre_paciente: '',
  ci: '',
  fecha_hora: '',
  descripcion: '',
  nombre_doctor: ''
  };
  constructor(private agendaService: AgendaService, private router: Router, private doctorService: DoctorService) {}

  ngOnInit(){
    this.getDoctores();
  }

  getDoctores() {
    this.doctorService.getAllDoctores().subscribe((data: any) => {
      this.doctores = data;
    });
  }
  

  onSubmit() {
    this.agendaService.createAgenda(this.agendaData).subscribe((response: any) => {
      window.history.back();
    });
  }

  goBack() {
    // Navegar a la página anterior en el historial del navegador
    window.history.back();
  }
}


