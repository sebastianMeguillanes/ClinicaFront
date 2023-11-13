import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistClinicaService } from '../histClinica.service';
import { DoctorService } from '../../doctor/doctor.service'
import { TratamientoService } from '../../tratamiento/tratamiento.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  tratamientos: any[] = [];
  doctores: any[] = [];
  selectedImage: File | undefined
  histClinicaData: any = {
    radiografias: '',
    tipo: '',
    nombre_doctor: '',
    fecha_registro: '',
    medicaciones: '',
    examen_clinico: '',
  };

  constructor(private histClinicaService: HistClinicaService, private router: Router, private doctorService: DoctorService, private tratamientoService: TratamientoService) {}

  ngOnInit(){
    this.getDoctores();
    this.getTratamientos();
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

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  onSubmit() {
    // Llamar al servicio para crear un historial clinico con this.pacienteData
    this.histClinicaService.createHistClinica(this.histClinicaData).subscribe((response: any) => {
      // Manejar la respuesta del servicio (por ejemplo, redireccionar o mostrar un mensaje)
      window.history.back();
    });
  }

  goBack() {
    // Navegar a la página anterior en el historial del navegador
    window.history.back();
  }
}

