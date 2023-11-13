import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistClinicaService } from '../histClinica.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  isValidURL(url: string): boolean {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // Protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IPv4
      '(\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string
      '(#[-a-z\\d_]*)?$', 'i'); // Fragment locator

    return !!pattern.test(url);
  }
  histClinicaData: any = {
    radiografias: '',
    tipo: '',
    id_doctor: '',
    id_paciente: '',
    fecha_registro: '',
    medicaciones: '',
    examen_clinico: ''
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
    // Navegar a la página anterior en el historial del navegador
    window.history.back();
  }
}

