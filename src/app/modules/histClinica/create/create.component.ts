import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistClinicaService } from '../histClinica.service';
import { DoctorService } from '../../doctor/doctor.service';
import { TratamientoService } from '../../tratamiento/tratamiento.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
  tratamientos: any[] = [];
  doctores: any[] = [];
  selectedImage: File | undefined;

  histClinicaData: any = {
    id_paciente: '',
    imagenes: '',
    tipo: '',
    nombre_doctor: '',
    fecha_registro: '',
    medicaciones: '',
    examen_clinico: '',
  };

  // Nueva variable para almacenar el valor del parámetro 'id_paciente'
  idPaciente: string = '';

  constructor(
    private http: HttpClient,
    private histClinicaService: HistClinicaService,
    private router: Router,
    private route: ActivatedRoute, // Agregamos ActivatedRoute aquí
    private doctorService: DoctorService,
    private tratamientoService: TratamientoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // params contiene todos los parámetros de la ruta
      // params['id'] contiene el valor del parámetro 'id'
      const id = +params['id']; // Convierte el valor a un número si es necesario
      //window.alert(id);
  
     
    });
    this.getDoctores();
    this.getTratamientos();
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit() {
    
    if (this.selectedImage) {
      this.uploadFile(this.selectedImage);
    }
    // Asignamos el valor del parámetro 'id_paciente' al objeto histClinicaData
    //this.histClinicaData.datos.id_paciente = this.idPaciente;
    // Llamar al servicio para crear un historial clínico con this.histClinicaData
    this.histClinicaService.createHistClinica(this.histClinicaData).subscribe((response: any) => {
      // Manejar la respuesta del servicio (por ejemplo, redireccionar o mostrar un mensaje)
      window.history.back();
    });
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('imagen', file);
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



  goBack() {
    // Navegar a la página anterior en el historial del navegador
    window.history.back();
  }
}
