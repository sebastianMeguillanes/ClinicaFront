import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NavbarModule } from '../modulo-navbar.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
  ],
  imports: [CommonModule, PacienteRoutingModule, FormsModule, NavbarModule],
})
export class PacienteModule {}

