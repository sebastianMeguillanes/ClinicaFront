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
    tipo_tratamiento: '',
    nombre_doctor: '',
    apellido_doctor: '',
    fecha_registro: ''
  };

  constructor(
    private histClinicaService: HistClinicaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const histClinicaId = this.route.snapshot.params['id'];
    
    this.histClinicaService.getHistClinicaById(histClinicaId).subscribe((response: any) => {
      this.histClinicaData = response;
      this.histClinicaData.fecha_registro = new Date(this.histClinicaData.fecha_registro).toISOString().split('T')[0];
    });
  }
  
  onSubmit() {
    const histClinicaId = this.route.snapshot.params['id'];
    this.histClinicaData.fecha_registro = new Date(this.histClinicaData.fecha_registro).toISOString().split('T')[0];
    this.histClinicaService.updateHistClinica(histClinicaId, this.histClinicaData).subscribe((response: any) => {
      window.history.back();
    });
  }

 
  goBack() {
    // Navegar a la página anterior en el historial del navegador
    window.history.back();
  }
}
