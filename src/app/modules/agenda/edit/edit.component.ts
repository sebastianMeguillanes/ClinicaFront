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
  ci: '',
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
  const agendaId = this.route.snapshot.params['id'];
  this.agendaService.getAgendaById(agendaId).subscribe((response: any) => {
  this.agendaData = response;
    //window.alert(agendaId);
    //window.alert(this.agendaData.fecha_hora);
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

  