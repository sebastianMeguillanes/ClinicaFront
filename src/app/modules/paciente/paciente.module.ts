import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DetailsComponent,
    ListComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
