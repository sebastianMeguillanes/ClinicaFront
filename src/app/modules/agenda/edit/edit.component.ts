import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  agendaData: any = {
  nombre_paciente: '',
  ci_paciente: '',
  fecha_hora: '',
  descripcion: '',
  nombre_doctor: ''
};

constructor(
private agendaService: AgendaService,
private route: ActivatedRoute,
private router: Router,
) {}

ngOnInit(): void {
  const doctorId = this.route.snapshot.params['id'];
  this.agendaService.getAgendaById(doctorId).subscribe((response: any) => {
    console.log(response);
    this.agendaData = response;
  });
}

onSubmit() {
  const agendaId = this.route.snapshot.params['id'];
  this.agendaData.fecha_hora = new Date(this.agendaData.fecha_hora);
  this.agendaService.updateAgenda(agendaId, this.agendaData).subscribe((response: any) => {
    window.history.back();
  });
}

goBack() {
this.router.navigate(['/agenda/list']);
}
}

  