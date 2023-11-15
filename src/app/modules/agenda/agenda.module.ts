import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TratamientoRoutingModule } from './agenda-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent
  ],
  imports: [CommonModule, TratamientoRoutingModule, FormsModule],
})
export class AgendaModule {}
