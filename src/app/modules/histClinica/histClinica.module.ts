import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistClinicaRoutingModule } from './histClinica-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from '../modulo-navbar.module';
@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
   ],
  imports: [CommonModule, HistClinicaRoutingModule, FormsModule, NavbarModule],
})
export class HistClinicaModule {}

