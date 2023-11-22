import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../../auth.service'; // Ajusta la ruta según tu estructura

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

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    // Llamar al servicio para realizar el inicio de sesión
    this.loginService.login(this.loginData).subscribe((response: any) => {
      // Manejar la respuesta del servicio
      console.log('Inicio de sesión exitoso', response);

      // Guardar el token en el servicio de autenticación
      this.authService.setToken(response.token);

      // Redirigir a la página deseada después del inicio de sesión
      this.router.navigate(['/paciente']);
    });
  }
}
