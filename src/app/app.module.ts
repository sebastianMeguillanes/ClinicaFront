import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EscritorioModule } from './modules/escritorio/escritorio.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule si utilizas formularios de plantilla
// o importa ReactiveFormsModule si utilizas formularios reactivos

@NgModule({
  declarations: [
    AppComponent,
    // Agrega aquí tus otros componentes si los tienes
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
