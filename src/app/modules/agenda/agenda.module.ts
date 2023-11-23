import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaRoutingModule } from './agenda-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarModule } from '../modulo-navbar.module';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    SearchComponent,
    DeleteComponent
  ],
  imports: [CommonModule, AgendaRoutingModule, FormsModule ,NgxPaginationModule, NavbarModule],
})
export class AgendaModule {}

