import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './escritorio.component'; 

const escritorioRoutes: Routes = [
  { path: '', component: EscritorioComponent }, 
  { path: 'doctor', loadChildren: () => import('../doctor/doctor.module').then((m) => m.DoctorModule) },
  { path: 'paciente', loadChildren: () => import('../paciente/paciente.module').then((m) => m.PacienteModule) },
];

@NgModule({
  imports: [RouterModule.forChild(escritorioRoutes)],
  exports: [RouterModule],
})
export class EscritorioRoutingModule {}

