import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TratamientoRoutingModule } from './tratamiento-routing.module';
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
  imports: [CommonModule, TratamientoRoutingModule, FormsModule, NavbarModule],
})
export class TratamientoModule {}
