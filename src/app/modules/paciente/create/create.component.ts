import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  pacienteData: any = {
    nombre: '',
    apellido: '',
    celular: '',
    direccion: '',
    documento_identidad: '',
    sexo: 'Masculino', // Valor predeterminado
    fecha_nacimiento: '',
    enfermedad_base: '',
  };

  constructor(private pacienteService: PacienteService, private router: Router) {}

  onSubmit() {
    // Llamar al servicio para crear un paciente con this.pacienteData
    this.pacienteService.createPaciente(this.pacienteData).subscribe((response: any) => {
      // Manejar la respuesta del servicio (por ejemplo, redireccionar o mostrar un mensaje)
      this.router.navigate(['/paciente/list']); // Redirigir a la lista de pacientes
    });
  }

  goBack() {
    this.router.navigate(['/paciente/list']); // Volver atrás sin guardar cambios
  }
}

