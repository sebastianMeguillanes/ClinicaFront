import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const navbarRoutes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'doctor', loadChildren: () => import('../modules/doctor/doctor.module').then((m) => m.DoctorModule) },
  { path: 'paciente', loadChildren: () => import('../modules/paciente/paciente.module').then((m) => m.PacienteModule) },
  { path: 'tratamiento', loadChildren: () => import('../modules/tratamiento/tratamiento.module').then((m) => m.TratamientoModule) },
  { path: 'agenda', loadChildren: () => import('../modules/agenda/agenda.module').then((m) => m.AgendaModule) },
];

@NgModule({
  imports: [RouterModule.forChild(navbarRoutes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}

