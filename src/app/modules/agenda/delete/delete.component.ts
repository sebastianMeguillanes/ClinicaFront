import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { DoctorService } from '../../doctor/doctor.service'
@Component({
  selector: 'app-delete',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.scss'],
})
export class DeleteComponent implements OnInit {
  doctores: any[] = [];
  agendas: any[] = [];
  agendaData: any = {
    nombre_paciente: '',
    ci: '',
    fecha_hora: '',
    descripcion: '',
    nombre_doctor: ''
    };

  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    const agendaId = this.route.snapshot.params['id'];
    this.agendaService.deleteAgenda(agendaId).subscribe((response: any) => {
      this.router.navigate(['/agenda/list']);
    });
  }
  onSubmit(){
    
  }

  goBack() {
    this.router.navigate(['/agenda/list']); // Volver atrás sin guardar cambios
  }
}
