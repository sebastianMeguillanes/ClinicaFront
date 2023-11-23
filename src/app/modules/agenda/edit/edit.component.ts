import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { DoctorService } from '../../doctor/doctor.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  doctores: any[] = [];
  agendaData: any = {
      nombre_paciente: '',
      ci: '',
      fecha_hora: '',
      descripcion: '',
      id_doctor: '',
      estado_agenda:''
  };

  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const agendaId = this.route.snapshot.params['id'];
  
    this.agendaService.getAgendaById(agendaId).subscribe((response: any) => {
      //window.alert('Contenido de this.agendaData: \n' + JSON.stringify(response, null, 2));
      this.agendaData = response;
      //window.alert('Contenido de this.agendaData: \n' + JSON.stringify(this.agendaData));
     //window.alert( JSON.stringify(this.agendaData[0].nombre_paciente))
      
    });
    this.getDoctores();
  }
  

  onSubmit() {
    const agendaId = this.route.snapshot.params['id'];
    this.agendaData[0].fecha_nacimiento = new Date(this.agendaData[0].fecha_nacimiento).toISOString().split('T')[0];
    this.agendaService.updateAgenda(agendaId, this.agendaData[0]).subscribe((response: any) => {
      window.alert(this.agendaData[0])
      this.router.navigate(['/agenda/list']);
    });
  }

  goBack() {
    this.router.navigate(['/agenda/list']);
  }

  getDoctores() {
    this.doctorService.getAllDoctores().subscribe((data: any) => {
      this.doctores = data;
    });
  }
}
