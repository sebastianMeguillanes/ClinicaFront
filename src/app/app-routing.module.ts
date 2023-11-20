// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/modules/auth-guard.service'; // Ajusta la ruta según tu estructura

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'paciente',
    loadChildren: () =>
      import('./modules/paciente/paciente.module').then(
        (m) => m.PacienteModule
      ),
    canActivate: [AuthGuard] // Proteger la ruta paciente
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./modules/doctor/doctor.module').then(
        (m) => m.DoctorModule
      ),
    canActivate: [AuthGuard] // Proteger la ruta doctor
  },
  {
    path: 'escritorio',
    loadChildren: () =>
      import('./modules/escritorio/escritorio.module').then(
        (m) => m.EscritorioModule
      ),
    canActivate: [AuthGuard] // Proteger la ruta escritorio
  },
  {
    path: 'tratamiento',
    loadChildren: () =>
      import('./modules/tratamiento/tratamiento.module').then(
        (m) => m.TratamientoModule
      ),
    canActivate: [AuthGuard] // Proteger la ruta tratamiento
  },
  {
    path: 'histClinica',
    loadChildren: () =>
      import('./modules/histClinica/histClinica.module').then(
        (m) => m.HistClinicaModule
      ),
    canActivate: [AuthGuard] // Proteger la ruta histClinica
  },
  {
    path: 'agenda',
    loadChildren: () =>
      import('./modules/agenda/agenda.module').then(
        (m) => m.AgendaModule
      ),
    canActivate: [AuthGuard] // Proteger la ruta agenda
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./modules/usuario/usuario.module').then(
        (m) => m.UsuarioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
