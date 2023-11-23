import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from '../modulo-navbar.module';
@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [CommonModule, DoctorRoutingModule, FormsModule, NavbarModule],
})
export class DoctorModule {}
