import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const navbarRoutes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'doctor', loadChildren: () => import('../doctor/doctor.module').then((m) => m.DoctorModule) },
  { path: 'paciente', loadChildren: () => import('../paciente/paciente.module').then((m) => m.PacienteModule) },
];

@NgModule({
  imports: [RouterModule.forChild(navbarRoutes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}

