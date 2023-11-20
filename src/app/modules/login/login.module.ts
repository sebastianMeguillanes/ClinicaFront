import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CreateComponent

  ],
  imports: [CommonModule, LoginRoutingModule, FormsModule],
})
export class LoginModule {}