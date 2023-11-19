import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EscritorioModule } from './modules/escritorio/escritorio.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';// Importa el componente de la barra de navegación
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    EscritorioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
