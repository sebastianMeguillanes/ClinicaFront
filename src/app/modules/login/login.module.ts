import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { CreateComponent } from './create/create.component';
//import { EditComponent } from './edit/edit.component';
//import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CreateComponent
    // EditComponent,
    // ListComponent
  ],
  imports: [CommonModule, LoginRoutingModule, FormsModule],
})
export class LoginModule {}