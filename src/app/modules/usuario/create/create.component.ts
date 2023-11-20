import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  usuarioData: any = {
    tipo: '',
    cantidad_sesion: ''
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  
  onSubmit() {
    // Llamar al servicio para crear un paciente con this.pacienteData
    this.usuarioService.createUsuario(this.usuarioData).subscribe((response: any) => {
      // Manejar la respuesta del servicio (por ejemplo, redireccionar o mostrar un mensaje)
      this.router.navigate(['/usuario/list']); // Redirigir a la lista de pacientes
    });
  }

  goBack() {
    this.router.navigate(['/usuario/list']); // Volver atrás sin guardar cambios
  }
}