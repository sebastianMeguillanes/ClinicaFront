import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  doctorData: any = {
    nombre: '',
    apellido: '',
    celular: '',
    direccion: '',
    documento_identidad: '',
    sexo: 'Masculino', // Valor predeterminado
    fecha_nacimiento: '',
    especialidad: '',
    universidad:'',
    licencia_medica:''
  };

  constructor(private DoctorService: DoctorService, private router: Router) {}

  onSubmit() {
    // Llamar al servicio para crear un paciente con this.pacienteData
    this.DoctorService.createDoctor(this.doctorData).subscribe((response: any) => {
      // Manejar la respuesta del servicio (por ejemplo, redireccionar o mostrar un mensaje)
      this.router.navigate(['/doctor/list']); // Redirigir a la lista de pacientes
    });
  }

  goBack() {
    this.router.navigate(['/doctor/list']); // Volver atrás sin guardar cambios
  }
}

