import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../doctor/doctor.service';
import { TratamientoService } from '../../tratamiento/tratamiento.service';
import { HistClinicaService } from '../histClinica.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  tratamientos: any[] = [];
  doctores: any[] = [];
  selectedImage: File | undefined;
  histClinicaData: any = {
    imagen: '',
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
    private router: Router,
    private doctorService: DoctorService,
    private tratamientoService: TratamientoService
  ) {}

  ngOnInit(): void {
    const histClinicaId = this.route.snapshot.params['id'];
    
    this.histClinicaService.getImage(histClinicaId).subscribe((response: any) => {
    window.alert("das");
    this.histClinicaData = response;
    this.histClinicaData.datos.fecha_registro = new Date(this.histClinicaData.datos.fecha_registro).toISOString().split('T')[0];
    
    });

    this.getDoctores();
    this.getTratamientos();
  }

  onSubmit() {  
    const histClinicaId = this.route.snapshot.params['id'];
    this.histClinicaData.datos.fecha_registro = new Date(this.histClinicaData.datos.fecha_registro);
    this.histClinicaService.updateImage(histClinicaId, this.histClinicaData).subscribe((response: any) => {
      window.history.back();
    });
  }

  goBack() {
    // Navegar a la página anterior en el historial del navegador
    window.history.back();
  }

  getDoctores() {
    this.doctorService.getAllDoctores().subscribe((data: any) => {
      this.doctores = data;
    });
  }

  getTratamientos() {
    this.tratamientoService.getAllTratamientos().subscribe((data: any) => {
      this.tratamientos = data;
    });
  }
}

