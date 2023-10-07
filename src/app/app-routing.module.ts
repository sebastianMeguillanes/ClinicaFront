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
  // Otras rutas de la aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

