import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistClinicaService } from '../histClinica.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  histClinicaData: any = {
    radiografias: ''
  };

  constructor(private histClinicaService: HistClinicaService, private router: Router) {}

  onSubmit() {
    // Llamar al servicio para crear un historial clinico con this.pacienteData
    this.histClinicaService.createHistClinica(this.histClinicaData).subscribe((response: any) => {
      // Manejar la respuesta del servicio (por ejemplo, redireccionar o mostrar un mensaje)
      this.router.navigate(['/histClinica/list']); // Redirigir a la lista de pacientes
    });
  }

  goBack() {
    this.router.navigate(['/histClinica/list']); // Volver atrás sin guardar cambios
  }
}

