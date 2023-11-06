import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'escritorio', pathMatch: 'full' },
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
  {
    path: 'escritorio',
    loadChildren: () =>
      import('./modules/escritorio/escritorio.module').then(
        (m) => m.EscritorioModule
      ),
  },
  {
  path: 'tratamiento',
    loadChildren: () =>
      import('./modules/tratamiento/tratamiento.module').then(
        (m) => m.TratamientoModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

