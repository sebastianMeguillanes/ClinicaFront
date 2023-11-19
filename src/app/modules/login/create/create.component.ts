import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  loginData: any = {
    usuario: '',
    contrasena: ''
  };

  constructor(private LoginService: LoginService, private router: Router) {}

  onSubmit() {
    // Llamar al servicio para crear un paciente con this.pacienteData
    this.LoginService.login(this.loginData).subscribe(() => {
      // Manejar la respuesta del servicio (por ejemplo, redireccionar o mostrar un mensaje)
      // this.router.navigate(['/login/list']); // Redirigir a la lista de pacientes
    });
  }

  // goBack() {
  //   this.router.navigate(['/doctor/list']); // Volver atrás sin guardar cambios
  // }
}

