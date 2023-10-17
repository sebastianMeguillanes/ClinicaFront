import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'paciente',
    loadChildren: () =>
      import('./modules/paciente/paciente.module').then(
        (m) => m.PacienteModule
      ),
  },
   {
     path: 'doctor',
   loadChildren: () =>
      import('./modules/doctor/doctor.module').then(
       (m) => m.DoctorModule
       ),
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

