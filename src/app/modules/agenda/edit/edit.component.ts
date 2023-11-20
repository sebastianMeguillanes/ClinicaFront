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
      nombre: '',
      apellido: '',
      celular: '',
      direccion: '',
      documento_identidad: '',
      sexo: '',
      fecha_nacimiento: ''
  };

  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const agendaId = this.route.snapshot.params['id'];
  
    this.agendaService.getAgendaById(agendaId).subscribe((response: any) => {
      //window.alert('Contenido de this.agendaData: \n' + JSON.stringify(response, null, 2));
      this.agendaData = response;
     // window.alert('Contenido de this.agendaData: \n' + JSON.stringify(this.agendaData , null, 2));
      window.alert(this.agendaData.nombre_paciente)
      // Resto del código...
    });
  }
  

  onSubmit() {
    const agendaId = this.route.snapshot.params['id'];
    this.agendaData.fecha_nacimiento = new Date(this.agendaData.fecha_nacimiento).toISOString().split('T')[0];
    this.agendaService.updateAgenda(agendaId, this.agendaData).subscribe((response: any) => {
      this.router.navigate(['/agenda/list']);
    });
  }

  goBack() {
    this.router.navigate(['/agenda/list']);
  }
}
