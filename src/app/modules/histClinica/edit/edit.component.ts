import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistClinicaService } from '../histClinica.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  histClinicaData: any = {
    radiografias: '',
    tipo: '',
    nombre: '',
    apellido: '',
    fecha_registro: '',
    medicaciones: '',
    examen_clinico: ''
  };

  constructor(
    private histClinicaService: HistClinicaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const histClinicaId = this.route.snapshot.params['id'];
    
    this.histClinicaService.getImage(histClinicaId).subscribe((response: any) => {
      this.histClinicaData = response;
     // window.alert(JSON.stringify(this.histClinicaData.datos.examen_clinico))
     // window.alert('Contenido de this.agendaData: \n' + JSON.stringify(response, null, 2));
      //window.alert(this.histClinicaData.image)
      this.histClinicaData.fecha_registro = new Date(this.histClinicaData.fecha_registro);
    });
  }
  //a
  onSubmit() {
    const histClinicaId = this.route.snapshot.params['id'];
    this.histClinicaData.fecha_registro = new Date(this.histClinicaData.fecha_registro);
    this.histClinicaService.updateHistClinica(histClinicaId, this.histClinicaData).subscribe((response: any) => {
      window.history.back();
    });
  }

  goBack() {
    // Navegar a la página anterior en el historial del navegador
    window.history.back();
  }
}

