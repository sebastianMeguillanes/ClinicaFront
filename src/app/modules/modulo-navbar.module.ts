// modulo-navbar.module.ts
import { NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent] // Asegúrate de exportar el componente
})
export class NavbarModule { }