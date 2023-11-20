import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';

const routes: Routes = [
  { path: '', component: CreateComponent },
  // Otras rutas si es necesario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoutingModule {}