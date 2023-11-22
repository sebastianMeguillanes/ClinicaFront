import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './escritorio.component'; 

const escritorioRoutes: Routes = [
  { path: '', component: EscritorioComponent }, 
  ];

@NgModule({
  imports: [RouterModule.forChild(escritorioRoutes)],
  exports: [RouterModule],
})
export class EscritorioRoutingModule {}

