import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TratamientoService } from '../tratamiento.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  tratamientoData: any = {
    tipo: '',
    cantidad_sesion: ''
  };

  constructor(private tratamientoService: TratamientoService, private router: Router) {}

  
  onSubmit() {
    // Llamar al servicio para crear un paciente con this.pacienteData
    this.tratamientoService.createTratamiento(this.tratamientoData).subscribe((response: any) => {
      // Manejar la respuesta del servicio (por ejemplo, redireccionar o mostrar un mensaje)
      this.router.navigate(['/tratamiento/list']); // Redirigir a la lista de pacientes
    });
  }
  goBack() {
    this.router.navigate(['/tratamiento/list']); // Volver atrás sin guardar cambios
  }
}